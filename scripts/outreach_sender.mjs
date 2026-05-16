import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

async function loadLocalEnv(filePath = ".env.local") {
  try {
    const contents = await readFile(filePath, "utf8");
    for (const line of contents.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }

      const [key, ...valueParts] = trimmed.split("=");
      if (!process.env[key]) {
        process.env[key] = valueParts.join("=");
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}

async function loadEnvFiles(filePaths) {
  for (const filePath of filePaths) {
    await loadLocalEnv(filePath);
  }
}

const DEFAULT_FROM = "Onyx AI Studio <hello@onyxaistudio.digital>";
const DEFAULT_REPLY_TO = "prograniteservices@gmail.com";

function getPhysicalAddress() {
  return process.env.ONYX_PHYSICAL_MAILING_ADDRESS ?? "Onyx AI Studio, Manning, SC";
}

export function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

export function buildComplianceFooter() {
  return [
    "--",
    getPhysicalAddress(),
    'If this is not useful, reply with "unsubscribe" and I will not follow up.',
  ].join("\n");
}

function lowerFirst(value) {
  return value ? `${value[0].toLowerCase()}${value.slice(1)}` : value;
}

export function buildInitialEmail(prospect) {
  const company = prospect.company;
  const reviewedSignal = prospect.personalizationNotes.endsWith(".")
    ? prospect.personalizationNotes
    : `${prospect.personalizationNotes}.`;
  const gap = prospect.inventoryOrLeadGap.endsWith(".")
    ? prospect.inventoryOrLeadGap
    : `${prospect.inventoryOrLeadGap}.`;
  const text = [
    `Hi ${company} team,`,
    "",
    `I was looking at ${prospect.website}; ${lowerFirst(reviewedSignal)}`,
    `That points to a gap: ${lowerFirst(gap)}`,
    "I built VapeOS as a live demo of semantic inventory search across 1,700+ real products, specifically for messy retail names where shoppers and staff do not always use the exact catalog wording.",
    "Would you want me to send the live demo link?",
    "",
    buildComplianceFooter(),
  ].join("\n");

  return {
    from: DEFAULT_FROM,
    replyTo: DEFAULT_REPLY_TO,
    to: normalizeEmail(prospect.email),
    subject: `Idea for ${company}'s inventory search`,
    text,
  };
}

export function findSendableProspects(prospects, priorRecipients) {
  return prospects
    .filter((prospect) => prospect.status === "approved")
    .map((prospect) => ({ ...prospect, email: normalizeEmail(prospect.email) }))
    .filter((prospect) => prospect.email && !priorRecipients.has(prospect.email));
}

function parseArgs(argv) {
  const args = { delayMs: 1200, dryRun: false, send: false };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--dry-run") {
      args.dryRun = true;
    } else if (token === "--send") {
      args.send = true;
    } else if (token.startsWith("--")) {
      const key = token.slice(2);
      args[key] = key === "delay-ms" ? Number(argv[index + 1]) : argv[index + 1];
      index += 1;
    }
  }
  return args;
}

function extractProspects(input) {
  if (Array.isArray(input)) {
    return input;
  }

  if (Array.isArray(input.prospects)) {
    return input.prospects;
  }

  throw new Error("Batch JSON must be an array or an object with a prospects array.");
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  cells.push(current);
  return cells;
}

function csvCell(value) {
  const stringValue = String(value ?? "");
  if (/[",\n\r]/.test(stringValue)) {
    return `"${stringValue.replaceAll('"', '""')}"`;
  }

  return stringValue;
}

export function collectPriorRecipientsFromCsv(csv) {
  const emails = new Set();
  const lines = csv.split(/\r?\n/).filter(Boolean);
  let trackerIndexes = null;

  for (const line of lines) {
    const cells = parseCsvLine(line);
    if (cells.includes("touch_1_sent_at") && cells.includes("email")) {
      trackerIndexes = {
        email: cells.indexOf("email"),
        status: cells.indexOf("status"),
        touchOneSent: cells.indexOf("touch_1_sent_at"),
        minColumns: cells.length,
      };
      continue;
    }

    if (trackerIndexes && cells.length >= trackerIndexes.minColumns) {
      const email = normalizeEmail(cells[trackerIndexes.email]);
      const status = cells[trackerIndexes.status] ?? "";
      const touchOneSent = cells[trackerIndexes.touchOneSent] ?? "";
      if (email && (touchOneSent || status === "sent")) {
        emails.add(email);
      }
      continue;
    }

    const matches = line.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi);
    for (const match of matches) {
      emails.add(normalizeEmail(match[0]));
    }
  }

  return emails;
}

export function updateTrackerCsv(csv, sentRecipients, timestamp) {
  const lines = csv.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) {
    return csv;
  }

  const headers = parseCsvLine(lines[0]);
  const indexes = {
    email: headers.indexOf("email"),
    status: headers.indexOf("status"),
    touchOneSent: headers.indexOf("touch_1_sent_at"),
    replyStatus: headers.indexOf("reply_status"),
  };

  const rows = lines.slice(1).map((line) => {
    const cells = parseCsvLine(line);
    const email = normalizeEmail(cells[indexes.email]);
    if (sentRecipients.has(email)) {
      cells[indexes.status] = "sent";
      cells[indexes.touchOneSent] = timestamp;
      cells[indexes.replyStatus] = "sent";
    }

    return cells.map(csvCell).join(",");
  });

  return [headers.join(","), ...rows].join("\n") + "\n";
}

export function toResendPayload(email) {
  return {
    from: email.from,
    to: email.to,
    reply_to: email.replyTo,
    subject: email.subject,
    text: email.text,
  };
}

async function readOptionalFile(filePath) {
  if (!filePath) {
    return "";
  }

  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return "";
    }
    throw error;
  }
}

async function sendWithResend(email) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is required for --send.");
  }

  if (!process.env.ONYX_PHYSICAL_MAILING_ADDRESS) {
    throw new Error("ONYX_PHYSICAL_MAILING_ADDRESS is required for --send compliance.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toResendPayload(email)),
  });

  if (!response.ok) {
    throw new Error(`Resend rejected ${email.to}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

async function appendLog(logPath, email, resultId = "dry-run") {
  const timestamp = new Date().toISOString();
  await mkdir(path.dirname(logPath), { recursive: true });
  await appendFile(
    logPath,
    `${timestamp},${email.to},${email.subject.replaceAll(",", " ")},${resultId}\n`,
    "utf8",
  );
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function runCli() {
  await loadEnvFiles([
    ".env.local",
    "C:\\Users\\heath\\Desktop\\skills\\auth\\.env",
    "C:\\Users\\heath\\Desktop\\skills\\auth\\keys\\resend.env",
  ]);
  const args = parseArgs(process.argv.slice(2));
  if (!args.batch || !args.log) {
    throw new Error(
      "Usage: node scripts/outreach_sender.mjs --batch <json> --tracker <csv> --log <csv> --dry-run",
    );
  }

  if (args.send && args.dryRun) {
    throw new Error("Use either --send or --dry-run, not both.");
  }

  if (!args.send && !args.dryRun) {
    throw new Error("Choose --dry-run for inspection or --send for live Resend delivery.");
  }

  const batch = JSON.parse(await readFile(args.batch, "utf8"));
  const prospects = extractProspects(batch);
  const previousCsv = [await readOptionalFile(args.tracker), await readOptionalFile(args.log)].join(
    "\n",
  );
  const priorRecipients = collectPriorRecipientsFromCsv(previousCsv);
  const emails = findSendableProspects(prospects, priorRecipients).map(buildInitialEmail);

  console.log(`Mode: ${args.send ? "send" : "dry-run"}`);
  console.log(`From: ${DEFAULT_FROM}`);
  console.log(`Reply-To: ${DEFAULT_REPLY_TO}`);
  console.log(`Recipient count: ${emails.length}`);

  if (emails[0]) {
    console.log("\nFirst email preview:");
    console.log(`To: ${emails[0].to}`);
    console.log(`Subject: ${emails[0].subject}`);
    console.log(emails[0].text);
  }

  if (args.dryRun) {
    return;
  }

  const sentRecipients = new Set(priorRecipients);
  const sentTimestamp = new Date().toISOString();
  const trackerCsv = args.tracker ? await readOptionalFile(args.tracker) : "";

  for (const email of emails) {
    const result = await sendWithResend(email);
    await appendLog(args.log, email, result.id ?? "sent");
    sentRecipients.add(email.to);
    if (args.tracker) {
      await writeFile(
        args.tracker,
        updateTrackerCsv(trackerCsv, sentRecipients, sentTimestamp),
        "utf8",
      );
    }
    await sleep(args.delayMs);
  }
}

const isCli = process.argv[1] === fileURLToPath(import.meta.url);

if (isCli) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
