import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const collectionPages = [
  "src/app/services/page.tsx",
  "src/app/portfolio/page.tsx",
  "src/app/case-studies/page.tsx",
  "src/app/insights/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
];

test("collection pages render their visible page title as an h1", () => {
  for (const page of collectionPages) {
    const source = read(page);

    assert.match(source, /<SectionHeading[\s\S]*titleAs="h1"/, page);
  }
});

test("collection and detail pages publish breadcrumb structured data", () => {
  for (const page of [
    ...collectionPages,
    "src/app/services/[slug]/page.tsx",
    "src/app/case-studies/[slug]/page.tsx",
    "src/app/insights/[slug]/page.tsx",
  ]) {
    const source = read(page);

    assert.match(source, /breadcrumbSchema/, page);
    assert.match(source, /<JsonLd data=\{breadcrumbs\}/, page);
  }
});

test("insights and case studies use the founder person schema as author", () => {
  const layout = read("src/app/layout.tsx");
  const insights = read("src/app/insights/[slug]/page.tsx");
  const caseStudies = read("src/app/case-studies/[slug]/page.tsx");

  assert.match(layout, /const personSchema =/);
  assert.match(layout, /"@id": founderPersonId/);
  assert.match(insights, /author:\s*{[\s\S]*"@id": founderPersonId/);
  assert.match(caseStudies, /author:\s*{[\s\S]*"@id": founderPersonId/);
});

test("sitemap advertises the current technical SEO refresh date", () => {
  const sitemap = read("src/app/sitemap.ts");

  assert.match(sitemap, /2026-07-16T23:30:00\.000Z/);
  assert.match(sitemap, /"\/about"/);
});

test("long insight titles were shortened without changing slugs", () => {
  const source = read("src/lib/site-data.ts");

  for (const title of [
    "What Website Quote Tools Should Collect First",
    "How Small Businesses Can Use AI With Staff",
    "Why AI Needs Structured Business Data",
    "Semantic Search for Business Inventory",
    "AI Inventory Search for Messy Vape Catalogs",
  ]) {
    assert.ok(title.length <= 60, title);
    assert.match(source, new RegExp(`title: "${title}"`));
  }
});

test("AI discovery highlights the Review and countertop quote-intake proof path", () => {
  const llms = read("public/llms.txt");

  assert.match(llms, /AI Operations Review/);
  assert.match(llms, /GraniteApp Estimate Tool/);
  assert.match(llms, /152-material catalog/);
  assert.match(llms, /versioned estimate snapshots/);
});
