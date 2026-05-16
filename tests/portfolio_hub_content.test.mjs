import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("portfolio hub route and navigation are exposed", () => {
  const siteData = read("src/lib/site-data.ts");

  assert.match(siteData, /href: "\/portfolio", label: "Portfolio"/);
  assert.ok(existsSync("src/app/portfolio/page.tsx"));
});

test("portfolio hub publishes all 20 SaaS demos and external launcher links", () => {
  const siteData = read("src/lib/site-data.ts");
  const portfolioPage = read("src/app/portfolio/page.tsx");

  const appEntries = siteData.match(/demoUrl: portfolioDemoUrl\("[a-z0-9-]+"\)/g) ?? [];

  assert.equal(appEntries.length, 20);
  assert.match(siteData, /https:\/\/onyx-portfolio-demos\.vercel\.app\/apps/);
  assert.match(portfolioPage, /portfolioDemoApps\.map/);
  assert.match(portfolioPage, /20 live SaaS demos/);
});

test("homepage copy links visitors to demos and case studies", () => {
  const homepage = read("src/app/page.tsx");

  assert.match(
    homepage,
    /Everything a service business needs to capture, answer, schedule, and follow up\./,
  );
  assert.match(
    homepage,
    /Real demos that show the pieces behind the operations system\./,
  );
  assert.match(homepage, /Explore the 20 SaaS demos/);
  assert.match(homepage, /href="\/portfolio"/);
  assert.match(homepage, /View case studies/);
  assert.match(homepage, /href="\/case-studies"/);
});

test("search and AI discovery include the portfolio hub", () => {
  const sitemap = read("src/app/sitemap.ts");
  const llms = read("public/llms.txt");

  assert.match(sitemap, /"\/portfolio"/);
  assert.match(llms, /https:\/\/onyxaistudio\.digital\/portfolio/);
  assert.match(llms, /https:\/\/onyx-portfolio-demos\.vercel\.app\/apps/);
});
