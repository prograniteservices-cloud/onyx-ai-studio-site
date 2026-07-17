import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

function caseStudyBlock(source, slug) {
  const start = source.indexOf(`slug: "${slug}"`);
  const next = source.indexOf('slug: "', start + 1);

  assert.notEqual(start, -1, `${slug} should exist`);
  return source.slice(start, next);
}

test("Lewis Asher is the fourth case study immediately after Greater Aiken Irrigation", () => {
  const source = read("src/lib/site-data.ts");
  const aiken = source.indexOf('slug: "greater-aiken-irrigation"');
  const lewis = source.indexOf('slug: "lewis-asher-remodeling"');
  const countertop = source.indexOf('slug: "countertop-estimator"');

  assert.ok(aiken < lewis && lewis < countertop);
  assert.match(read("src/components/site-footer.tsx"), /caseStudies\.slice\(0, 4\)/);
});

test("Lewis Asher case study uses factual local-growth proof and a followed live-site action", () => {
  const source = read("src/lib/site-data.ts");
  const block = caseStudyBlock(source, "lewis-asher-remodeling");
  const page = read("src/app/case-studies/[slug]/page.tsx");

  assert.match(block, /https:\/\/lewisasherremodeling\.com/);
  assert.match(block, /View live Lewis Asher site/);
  assert.match(block, /label: "Public routes", value: "9"/);
  assert.match(block, /label: "Project transformations", value: "4"/);
  assert.match(block, /label: "Google rating", value: "4\.9"/);
  assert.match(block, /Evidence-led presentation/);
  assert.match(block, /Small-job and local-search intent/);
  assert.match(block, /Mobile call and text conversion/);
  assert.match(block, /Indexing readiness/);
  assert.match(block, /case-study-regional-service\.svg/);
  assert.match(page, /caseStudy\.demoUrl/);
  assert.doesNotMatch(page, /nofollow/);
});

test("Lewis Asher proof is connected to services, sitemap, and AI discovery", () => {
  const source = read("src/lib/site-data.ts");
  const sitemap = read("src/app/sitemap.ts");
  const llms = read("public/llms.txt");

  assert.match(source, /relatedCases: \[[\s\S]*"lewis-asher-remodeling"/);
  assert.match(sitemap, /caseStudies\.map/);
  assert.match(llms, /Lewis Asher Remodeling -> https:\/\/onyxaistudio\.digital\/case-studies\/lewis-asher-remodeling/);
  assert.match(llms, /https:\/\/lewisasherremodeling\.com/);
});
