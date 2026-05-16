import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REQUIRED_FIELDS = [
  "company",
  "website",
  "contactPage",
  "location",
  "siteStrength",
  "inventoryOrLeadGap",
  "personalizationNotes",
  "targetScore",
  "status",
];

const TRACKER_HEADERS = [
  "company",
  "email",
  "location",
  "website",
  "status",
  "touch_1_sent_at",
  "touch_2_due_at",
  "touch_2_sent_at",
  "touch_3_due_at",
  "touch_3_sent_at",
  "touch_4_due_at",
  "touch_4_sent_at",
  "reply_status",
  "notes",
];

export function validateProspect(prospect) {
  const errors = [];

  for (const field of REQUIRED_FIELDS) {
    const value = prospect?.[field];
    if (value === undefined || value === null || value === "") {
      errors.push(`${field} is required`);
    }
  }

  if (!prospect?.email && !prospect?.contactPage) {
    errors.push("email or contactPage is required");
  }

  if (
    typeof prospect?.targetScore !== "number" ||
    prospect.targetScore < 1 ||
    prospect.targetScore > 100
  ) {
    errors.push("targetScore must be a number from 1 to 100");
  }

  if (
    prospect?.status &&
    !["approved", "manual_form", "needs_research", "rejected"].includes(prospect.status)
  ) {
    errors.push("status must be approved, manual_form, needs_research, or rejected");
  }

  return errors;
}

export function getApprovedProspects(prospects) {
  return prospects
    .filter((prospect) => prospect.status === "approved")
    .toSorted((a, b) => b.targetScore - a.targetScore);
}

export function buildReviewMarkdown(prospects, date) {
  const approvedProspects = getApprovedProspects(prospects);
  const rows = approvedProspects
    .map(
      (prospect, index) =>
        `| ${index + 1} | ${prospect.company} | ${prospect.location} | ${prospect.targetScore} | ${prospect.inventoryOrLeadGap} | ${prospect.email} |`,
    )
    .join("\n");

  return `# Vape Outreach Review Batch 01 - ${date}

## Campaign Positioning
- Offer: VapeOS live demo for AI inventory search.
- Target: independent South Carolina vape and smoke shops with weak online inventory, no searchable catalog, stale product pages, or contact-only purchase flows.
- Reject: chains, franchise/corporate systems, unreachable shops, and stores with strong ecommerce/search.
- Subject pattern: Idea for [Shop Name]'s inventory search
- CTA: ask whether they want the live demo link.

## Follow-Up Cadence
- Touch 1: initial personalized email.
- Touch 2: 3 business days later, ask if it is worth sending the demo.
- Touch 3: 7 calendar days later, mention faster product lookup or better customer questions.
- Touch 4: 14 calendar days later, close the loop and stop.

## Approved Prospects
| # | Company | Location | Score | Inventory Or Lead Gap | Email |
| --- | --- | --- | ---: | --- | --- |
${rows || "| - | No approved prospects yet | - | - | - | - |"}

## Dry-Run Checklist
- [ ] Sender is Onyx AI Studio <hello@onyxaistudio.digital>.
- [ ] Reply-To is prograniteservices@gmail.com unless replaced.
- [ ] Physical address and opt-out footer are present.
- [ ] First email proves the site was reviewed.
- [ ] Recipient count matches the reviewed batch.
- [ ] Duplicate recipients are excluded from prior logs and tracker rows.
`;
}

function csvCell(value) {
  const stringValue = String(value ?? "");
  if (/[",\n\r]/.test(stringValue)) {
    return `"${stringValue.replaceAll('"', '""')}"`;
  }

  return stringValue;
}

export function buildTrackerCsv(prospects) {
  const rows = getApprovedProspects(prospects).map((prospect) =>
    [
      prospect.company,
      prospect.email,
      prospect.location,
      prospect.website,
      "approved",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "not_contacted",
      prospect.personalizationNotes,
    ]
      .map(csvCell)
      .join(","),
  );

  return [TRACKER_HEADERS.join(","), ...rows].join("\n") + "\n";
}

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token.startsWith("--")) {
      args[token.slice(2)] = argv[index + 1];
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

  throw new Error("Research JSON must be an array or an object with a prospects array.");
}

async function writeTextFile(filePath, contents) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, contents, "utf8");
}

async function runCli() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.research || !args.batch || !args.review || !args.tracker) {
    throw new Error(
      "Usage: node scripts/outreach_workflow.mjs --research <json> --batch <json> --review <md> --tracker <csv>",
    );
  }

  const research = JSON.parse(await readFile(args.research, "utf8"));
  const prospects = extractProspects(research);
  const validationErrors = prospects.flatMap((prospect, index) =>
    validateProspect(prospect).map((error) => `prospects[${index}]: ${error}`),
  );

  if (validationErrors.length > 0) {
    throw new Error(validationErrors.join("\n"));
  }

  const date = new Date().toISOString().slice(0, 10);
  const approvedProspects = getApprovedProspects(prospects);
  const batch = {
    campaign: "vapeos-sc-vape-shop-outreach",
    date,
    approvedCount: approvedProspects.length,
    prospects: approvedProspects,
  };

  await writeTextFile(args.batch, JSON.stringify(batch, null, 2) + "\n");
  await writeTextFile(args.review, buildReviewMarkdown(approvedProspects, date));
  await writeTextFile(args.tracker, buildTrackerCsv(approvedProspects));

  console.log(
    `Prepared ${approvedProspects.length} approved vape outreach prospects for dry-run review.`,
  );
}

const isCli = process.argv[1] === fileURLToPath(import.meta.url);

if (isCli) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
