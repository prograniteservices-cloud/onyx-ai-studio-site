import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

function caseStudyBlock(source, slug) {
  const start = source.indexOf(`slug: "${slug}"`);
  const next = source.indexOf('slug: "', start + 1);

  assert.notEqual(start, -1, `${slug} should exist`);
  return source.slice(start, next);
}

test("GraniteApp leads the case-study registry with verified production proof", () => {
  const source = read("src/lib/site-data.ts");
  const block = caseStudyBlock(source, "graniteapp");
  const firstCase = source.indexOf('slug: "graniteapp"');
  const scSmokes = source.indexOf('slug: "sc-smokes-directory"');

  assert.ok(firstCase < scSmokes);
  assert.match(block, /shared job and piece records/i);
  assert.match(block, /value: "75 sec"/);
  assert.match(block, /value: "6"/);
  assert.match(block, /value: "Full-job QA"/);
  assert.match(block, /Marking hands the full job to QA/);
  assert.match(block, /Issues and repairs return to quality review/);
  assert.match(block, /QA-gated load-out and management visibility/);
});

test("GraniteApp publishes narrated native video metadata and an adjacent transcript", () => {
  const source = read("src/lib/site-data.ts");
  const page = read("src/app/case-studies/[slug]/page.tsx");
  const block = caseStudyBlock(source, "graniteapp");

  assert.match(block, /graniteapp-product-demo-20260716\.mp4/);
  assert.match(block, /graniteapp-production-poster-20260716\.webp/);
  assert.match(block, /duration: "PT1M15S"/);
  assert.match(block, /uploadDate: "2026-07-16"/);
  assert.match(page, /<video/);
  assert.match(page, /controls/);
  assert.match(page, /playsInline/);
  assert.match(page, /preload="metadata"/);
  assert.match(page, /Captions are burned into the/);
  assert.match(page, /Text transcript/);
  assert.match(page, /"@type": "VideoObject"/);
  assert.doesNotMatch(page, /autoPlay/);
});

test("GraniteApp media and real WebP card assets are versioned", () => {
  const media = "public/media/graniteapp/graniteapp-product-demo-20260716.mp4";
  const poster = "public/media/graniteapp/graniteapp-production-poster-20260716.webp";
  const estimate = "public/media/graniteapp/graniteapp-estimate-tool-20260716.webp";

  assert.ok(statSync(media).size > 16_000_000);
  for (const asset of [poster, estimate]) {
    const bytes = readFileSync(asset);
    assert.equal(bytes.subarray(0, 4).toString("ascii"), "RIFF");
    assert.equal(bytes.subarray(8, 12).toString("ascii"), "WEBP");
  }
});

test("the estimator slug now points only to current GraniteApp estimate behavior", () => {
  const source = read("src/lib/site-data.ts");
  const llms = read("public/llms.txt");
  const block = caseStudyBlock(source, "countertop-estimator");

  assert.match(block, /title: "GraniteApp Estimate Tool"/);
  assert.match(block, /https:\/\/graniteapp\.vercel\.app\/estimate/);
  assert.match(block, /152-material catalog/);
  assert.match(block, /server-owned pricing/);
  assert.match(block, /Versioned estimate snapshot/);
  assert.match(block, /Structured lead intake/);
  assert.match(llms, /GraniteApp Estimate Tool/);

  for (const content of [source, llms, read("src/app/case-studies/[slug]/page.tsx")]) {
    assert.doesNotMatch(content, /estimate-tool-three\.vercel\.app/);
  }
});

test("GraniteApp is connected to service proof, sitemap, schema, cache, and About", () => {
  const source = read("src/lib/site-data.ts");
  const sitemap = read("src/app/sitemap.ts");
  const page = read("src/app/case-studies/[slug]/page.tsx");
  const config = read("next.config.ts");
  const about = read("src/app/about/page.tsx");

  assert.match(source, /slug: "ai-integration"[\s\S]*relatedCases: \[[\s\S]*"graniteapp"/);
  assert.match(source, /slug: "automation-workflows"[\s\S]*relatedCases: \["graniteapp"/);
  assert.match(source, /slug: "web-development"[\s\S]*relatedCases: \[[\s\S]*"graniteapp"/);
  assert.match(sitemap, /title: caseStudy\.video\.title/);
  assert.match(sitemap, /thumbnail_loc: absoluteUrl\(caseStudy\.video\.poster\)/);
  assert.match(sitemap, /content_loc: absoluteUrl\(caseStudy\.video\.source\)/);
  assert.match(sitemap, /duration: 75/);
  assert.match(page, /contentUrl: absoluteUrl\(caseStudy\.video\.source\)/);
  assert.match(config, /graniteapp-product-demo-20260716\.mp4/);
  assert.match(config, /max-age=31536000, immutable/);
  assert.match(about, /production operations and structured estimate intake/);
});
