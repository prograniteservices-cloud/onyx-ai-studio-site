import assert from "node:assert/strict";
import test from "node:test";

import {
  buildReviewMarkdown,
  buildTrackerCsv,
  getApprovedProspects,
  validateProspect,
} from "../scripts/outreach_workflow.mjs";

const approvedProspect = {
  company: "Sample Vapor",
  website: "https://example.com",
  contactPage: "https://example.com/contact",
  email: "owner@example.com",
  location: "Manning, SC",
  siteStrength: "Basic informational site",
  inventoryOrLeadGap: "No searchable inventory for disposables or coils",
  personalizationNotes: "Mentions large e-liquid and accessories selection",
  targetScore: 86,
  status: "approved",
};

test("validateProspect accepts a complete vape outreach record", () => {
  assert.deepEqual(validateProspect(approvedProspect), []);
});

test("validateProspect reports missing required campaign fields", () => {
  const errors = validateProspect({
    ...approvedProspect,
    contactPage: "",
    email: "",
    targetScore: 0,
  });

  assert.match(errors.join("\n"), /email/);
  assert.match(errors.join("\n"), /targetScore/);
});

test("validateProspect accepts a contact-form-only manual prospect", () => {
  const errors = validateProspect({
    ...approvedProspect,
    email: "",
    status: "manual_form",
  });

  assert.deepEqual(errors, []);
});

test("getApprovedProspects returns approved records sorted by score", () => {
  const prospects = getApprovedProspects([
    { ...approvedProspect, company: "Lower Score", targetScore: 72 },
    { ...approvedProspect, company: "Needs Review", status: "needs_research", targetScore: 95 },
    { ...approvedProspect, company: "Higher Score", targetScore: 91 },
  ]);

  assert.deepEqual(
    prospects.map((prospect) => prospect.company),
    ["Higher Score", "Lower Score"],
  );
});

test("buildReviewMarkdown includes campaign angle and follow-up cadence", () => {
  const markdown = buildReviewMarkdown([approvedProspect], "2026-05-15");

  assert.match(markdown, /Subject pattern: Idea for \[Shop Name\]'s inventory search/);
  assert.match(markdown, /Touch 2: 3 business days later/);
  assert.match(markdown, /Sample Vapor/);
});

test("buildTrackerCsv creates expected tracker headers and prospect row", () => {
  const csv = buildTrackerCsv([approvedProspect]);

  assert.match(
    csv.split("\n")[0],
    /company,email,location,website,status,touch_1_sent_at/,
  );
  assert.match(csv, /Sample Vapor,owner@example.com,"Manning, SC"/);
});
