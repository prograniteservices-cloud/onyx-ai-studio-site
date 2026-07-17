import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("SC Smokes case study is registered as a local-directory proof asset", () => {
  const source = read("src/lib/site-data.ts");
  const start = source.indexOf('slug: "sc-smokes-directory"');
  const next = source.indexOf('slug: "', start + 1);
  const block = source.slice(start, next);

  assert.notEqual(start, -1, "case study slug should exist");
  assert.match(block, /title: "SC Smokes Directory"/);
  assert.match(block, /local-directory/);
  assert.match(block, /messy-data/);
  assert.match(block, /SEO-owner-funnel/);
  assert.match(block, /https:\/\/scsmokes\.com/);
  assert.match(block, /View live SCSmokes directory/);
  assert.match(block, /467/);
  assert.match(block, /8,569/);
  assert.match(block, /category signals are not live inventory/);
});

test("SC Smokes case study is discoverable in sitemap and llms guide", () => {
  const sitemap = read("src/app/sitemap.ts");
  const llms = read("public/llms.txt");

  assert.match(sitemap, /caseStudies\.map/);
  assert.match(llms, /SC Smokes Directory -> https:\/\/onyxaistudio\.digital\/case-studies\/sc-smokes-directory/);
  assert.match(llms, /https:\/\/scsmokes\.com/);
});

test("case study page can render the SC Smokes route through existing dynamic template", () => {
  const page = read("src/app/case-studies/[slug]/page.tsx");
  const data = read("src/lib/site-data.ts");

  assert.match(page, /generateStaticParams/);
  assert.match(page, /caseStudies\.map/);
  assert.match(page, /liveLinkLabel/);
  assert.match(
    data,
    /relatedCases:\s*\[\s*"graniteapp",\s*"sc-smokes-directory"/,
  );
});

test("Onyx has portfolio proof pages for QAtlas and Greater Aiken Irrigation", () => {
  const source = read("src/lib/site-data.ts");
  const llms = read("public/llms.txt");

  assert.match(source, /slug: "qatlas"/);
  assert.match(source, /https:\/\/qatlas\.co/);
  assert.match(source, /View live QAtlas platform/);
  assert.match(source, /daily discovery/);
  assert.match(source, /market brief/);

  assert.match(source, /slug: "greater-aiken-irrigation"/);
  assert.match(source, /https:\/\/aikenirrigation\.pro/);
  assert.match(source, /View live Aiken Irrigation site/);
  assert.match(source, /case-study-driven search visibility/);

  assert.match(llms, /QAtlas -> https:\/\/onyxaistudio\.digital\/case-studies\/qatlas/);
  assert.match(llms, /Greater Aiken Irrigation -> https:\/\/onyxaistudio\.digital\/case-studies\/greater-aiken-irrigation/);
});
