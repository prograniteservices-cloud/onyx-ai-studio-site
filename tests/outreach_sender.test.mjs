import assert from "node:assert/strict";
import test from "node:test";

import {
  buildComplianceFooter,
  buildInitialEmail,
  collectPriorRecipientsFromCsv,
  findSendableProspects,
  normalizeEmail,
  toResendPayload,
  updateTrackerCsv,
} from "../scripts/outreach_sender.mjs";

const approvedProspect = {
  company: "Sample Vapor",
  website: "https://example.com",
  contactPage: "https://example.com/contact",
  email: "Owner@Example.com ",
  location: "Manning, SC",
  siteStrength: "Basic informational site",
  inventoryOrLeadGap: "No searchable inventory for disposables or coils",
  personalizationNotes: "Mentions large e-liquid and accessories selection",
  targetScore: 86,
  status: "approved",
};

test("normalizeEmail trims and lowercases recipient addresses", () => {
  assert.equal(normalizeEmail(" Owner@Example.com "), "owner@example.com");
});

test("buildInitialEmail uses the VapeOS demo angle and requested sender details", () => {
  const email = buildInitialEmail(approvedProspect);

  assert.equal(email.from, "Onyx AI Studio <hello@onyxaistudio.digital>");
  assert.equal(email.replyTo, "prograniteservices@gmail.com");
  assert.equal(email.subject, "Idea for Sample Vapor's inventory search");
  assert.match(email.text, /1,700\+ real products/);
  assert.match(email.text, /live demo link/);
});

test("toResendPayload serializes reply-to for the Resend API", () => {
  const payload = toResendPayload(buildInitialEmail(approvedProspect));

  assert.equal(payload.reply_to, "prograniteservices@gmail.com");
  assert.equal(payload.replyTo, undefined);
});

test("buildComplianceFooter includes physical address and opt-out language", () => {
  const footer = buildComplianceFooter();

  assert.match(footer, /Onyx AI Studio/);
  assert.match(footer, /Manning, SC/);
  assert.match(footer, /reply with \"unsubscribe\"/i);
});

test("findSendableProspects excludes prior recipients and non-approved records", () => {
  const prospects = [
    approvedProspect,
    { ...approvedProspect, company: "Other Shop", email: "other@example.com" },
    { ...approvedProspect, company: "Draft Shop", email: "draft@example.com", status: "needs_research" },
  ];

  const sendable = findSendableProspects(prospects, new Set(["owner@example.com"]));

  assert.deepEqual(
    sendable.map((prospect) => prospect.email),
    ["other@example.com"],
  );
});

test("collectPriorRecipientsFromCsv ignores tracker rows that have not been sent", () => {
  const csv = [
    "company,email,location,website,status,touch_1_sent_at,reply_status",
    "Unsent Shop,unsent@example.com,\"Manning, SC\",https://example.com,approved,,not_contacted",
    "Sent Shop,sent@example.com,\"Sumter, SC\",https://example.com,sent,2026-05-15T10:00:00.000Z,sent",
    "Log Shop,log@example.com,Idea for Log Shop,dry-run",
  ].join("\n");

  assert.deepEqual(
    Array.from(collectPriorRecipientsFromCsv(csv)).sort(),
    ["log@example.com", "sent@example.com"],
  );
});

test("updateTrackerCsv marks sent recipients and preserves unsent rows", () => {
  const tracker = [
    "company,email,location,website,status,touch_1_sent_at,touch_2_due_at,touch_2_sent_at,touch_3_due_at,touch_3_sent_at,touch_4_due_at,touch_4_sent_at,reply_status,notes",
    "Sent Shop,sent@example.com,\"Sumter, SC\",https://example.com,approved,,,,,,,,not_contacted,notes",
    "Unsent Shop,unsent@example.com,\"Manning, SC\",https://example.com,approved,,,,,,,,not_contacted,notes",
  ].join("\n");

  const updated = updateTrackerCsv(tracker, new Set(["sent@example.com"]), "2026-05-15T10:00:00.000Z");

  assert.match(updated, /Sent Shop,sent@example.com,"Sumter, SC",https:\/\/example.com,sent,2026-05-15T10:00:00.000Z/);
  assert.match(updated, /Unsent Shop,unsent@example.com,"Manning, SC",https:\/\/example.com,approved,,,,,,,,not_contacted/);
});
