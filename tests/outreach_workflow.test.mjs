import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
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
    inventoryOrLeadGap: "",
    leadCaptureWeakness: "",
    targetScore: 0,
  });

  assert.match(errors.join("\n"), /email/);
  assert.match(errors.join("\n"), /inventoryOrLeadGap or leadCaptureWeakness/);
  assert.match(errors.join("\n"), /targetScore/);
});

test("validateProspect accepts leadCaptureWeakness as a generic outreach gap", () => {
  const errors = validateProspect({
    ...approvedProspect,
    inventoryOrLeadGap: "",
    leadCaptureWeakness: "Basic contact form with no service triage",
  });

  assert.deepEqual(errors, []);
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

  assert.match(markdown, /Subject pattern: Idea for \[Shop Name\]'s product lookup/);
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

test("CLI accepts generic targets arrays for non-vape outreach research", async () => {
  const dir = await mkdtemp(join(tmpdir(), "onyx-outreach-workflow-"));
  const researchPath = join(dir, "research.json");
  const batchPath = join(dir, "batch.json");
  const reviewPath = join(dir, "review.md");
  const trackerPath = join(dir, "tracker.csv");

  await writeFile(
    researchPath,
    JSON.stringify({
      targets: [
        {
          ...approvedProspect,
          inventoryOrLeadGap: "",
          leadCaptureWeakness: "Basic contact form with no service triage",
        },
      ],
    }),
    "utf8",
  );

  const { spawnSync } = await import("node:child_process");
  const result = spawnSync(
    process.execPath,
    [
      "scripts/outreach_workflow.mjs",
      "--research",
      researchPath,
      "--batch",
      batchPath,
      "--review",
      reviewPath,
      "--tracker",
      trackerPath,
    ],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );

  assert.equal(result.status, 0, result.stderr);
  const batch = JSON.parse(await readFile(batchPath, "utf8"));
  assert.equal(batch.approvedCount, 1);
  assert.match(await readFile(reviewPath, "utf8"), /Basic contact form with no service triage/);
});
