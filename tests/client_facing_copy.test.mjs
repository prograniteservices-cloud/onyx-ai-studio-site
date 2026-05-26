import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const files = [
  "src/app/portfolio/page.tsx",
  "src/app/insights/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/page.tsx",
  "src/lib/site-data.ts",
  "public/llms.txt",
];

const bannedPhrases = [
  "lightweight public metadata",
  "not coupled to the demo app",
  "Four deeper proof narratives remain available",
  "Use the case studies when a visitor needs more context",
  "Insights now support the flagship AI operations offer",
  "separate portfolio deployment",
];

test("public-facing pages do not expose internal implementation notes", () => {
  const content = files
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  for (const phrase of bannedPhrases) {
    assert.equal(content.includes(phrase), false, `Found internal note copy: ${phrase}`);
  }
});

test("portfolio and insights pages use client-facing hooks", () => {
  const portfolioPage = readFileSync("src/app/portfolio/page.tsx", "utf8");
  const insightsPage = readFileSync("src/app/insights/page.tsx", "utf8");

  assert.match(portfolioPage, /Open a demo and test the workflow yourself/);
  assert.match(portfolioPage, /See how the demos turn into working business systems/);
  assert.match(insightsPage, /before AI can safely answer customers/);
});

test("AI Operations Review public surfaces explain the concrete buyer output", () => {
  const content = [
    "src/app/contact/page.tsx",
    "src/app/page.tsx",
    "src/lib/site-data.ts",
  ]
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  for (const phrase of [
    "reviewed within one business day",
    "workflow map",
    "first-system recommendation",
    "source-material checklist",
    "30-45 minute review call",
    "not sold or added to bulk outreach",
  ]) {
    assert.match(content, new RegExp(phrase), `Missing Review package phrase: ${phrase}`);
  }
});

test("client-facing proof copy avoids ROI calculator promises", () => {
  const content = files
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  for (const phrase of [
    "ROI calculator",
    "return on investment calculator",
    "guaranteed ROI",
  ]) {
    assert.equal(content.includes(phrase), false, `Found banned ROI phrase: ${phrase}`);
  }
});

test("countertop proof path includes structured quote-intake evidence", () => {
  const content = [
    "src/lib/site-data.ts",
    "public/llms.txt",
  ]
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  for (const phrase of [
    "sample lead record",
    "material selection",
    "square footage",
    "edge detail",
    "sink",
    "backsplash",
    "showroom readiness",
    "before the first staff follow-up",
  ]) {
    assert.match(content, new RegExp(phrase), `Missing countertop proof phrase: ${phrase}`);
  }
});
