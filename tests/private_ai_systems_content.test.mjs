import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const publicContent = [
  "src/lib/site-data.ts",
  "src/app/services/[slug]/page.tsx",
  "src/app/insights/[slug]/page.tsx",
  "src/app/layout.tsx",
  "src/app/pricing/page.tsx",
  "src/components/contact-form.tsx",
  "public/llms.txt",
].map(read).join("\n");

test("private AI systems is a major service in nav and homepage service order", () => {
  const source = read("src/lib/site-data.ts");

  assert.match(source, /href: "\/services\/private-ai-systems", label: "Private AI Systems"/);
  assert.match(source, /slug: "private-ai-systems"/);
  assert.match(source, /title: "Right-Sized Private AI Systems"/);
  assert.ok(
    source.indexOf('slug: "private-ai-systems"') < source.indexOf('slug: "ai-integration"'),
    "Private AI Systems should appear before AI integration so homepage primary services promote it.",
  );
});

test("private AI systems service has answer-ready SEO/AEO content and safe positioning", () => {
  const source = read("src/lib/site-data.ts");
  const serviceStart = source.indexOf('slug: "private-ai-systems"');
  const nextService = source.indexOf('slug: "ai-integration"', serviceStart + 1);
  const serviceBlock = source.slice(serviceStart, nextService);

  assert.match(serviceBlock, /primaryKeyword: "private AI systems"/);
  assert.match(serviceBlock, /answerBlock:/);
  assert.match(serviceBlock, /Onyx AI Studio builds private AI systems for small businesses/);
  assert.match(serviceBlock, /smallest reliable AI system/);
  assert.match(serviceBlock, /local, cloud, or hybrid/);
  assert.match(serviceBlock, /RAG/);
  assert.match(serviceBlock, /adapted small models/);
  assert.match(serviceBlock, /AI Operations Review includes a private AI fit check/);
  assert.match(serviceBlock, /Custom-scoped private AI build/);
  assert.ok((serviceBlock.match(/question:/g) ?? []).length >= 6);
});

test("private AI insight exists with FAQ support and internal links", () => {
  const source = read("src/lib/site-data.ts");
  const insightStart = source.indexOf('slug: "private-ai-vs-cloud-ai-small-businesses"');
  const nextInsight = source.indexOf('slug: "', insightStart + 1);
  const insightBlock = source.slice(insightStart, nextInsight);
  const insightPage = read("src/app/insights/[slug]/page.tsx");

  assert.match(insightBlock, /title: "Private AI vs Cloud AI for Small Businesses"/);
  assert.match(insightBlock, /Should my business use private AI, cloud AI, or hybrid AI/);
  assert.match(insightBlock, /answerBlock:/);
  assert.match(insightBlock, /questions:/);
  assert.match(insightBlock, /\/services\/private-ai-systems/);
  assert.match(insightBlock, /\/services\/ai-integration/);
  assert.match(insightBlock, /\/insights\/what-is-ai-operations-review/);
  assert.match(insightBlock, /\/contact/);
  assert.match(insightPage, /const faqSchema = insight\.questions/);
  assert.match(insightPage, /<JsonLd data=\{faqSchema\}/);
});

test("discovery surfaces expose private AI systems", () => {
  const sitemap = read("src/app/sitemap.ts");
  const llms = read("public/llms.txt");
  const layout = read("src/app/layout.tsx");
  const contactForm = read("src/components/contact-form.tsx");
  const pricing = read("src/app/pricing/page.tsx");

  assert.match(sitemap, /2026-07-14T22:45:00\.000Z/);
  assert.match(llms, /Private AI Systems -> https:\/\/onyxaistudio\.digital\/services\/private-ai-systems/);
  assert.match(llms, /Private AI vs Cloud AI for Small Businesses -> https:\/\/onyxaistudio\.digital\/insights\/private-ai-vs-cloud-ai-small-businesses/);
  assert.match(layout, /Private AI Systems/);
  assert.match(layout, /private AI systems/);
  assert.match(contactForm, /private-ai-systems/);
  assert.match(contactForm, /Private AI \/ local AI system/);
  assert.match(pricing, /Private AI systems are custom-scoped/);
  assert.match(pricing, /local hardware, model\s+choice, data sensitivity, and cloud fallback/);
});

test("public private AI copy avoids overclaims", () => {
  for (const phrase of [
    "tiny models do everything",
    "replace ChatGPT completely",
    "train from scratch",
    "perfect privacy",
    "guaranteed accuracy",
    "no cloud ever needed",
  ]) {
    assert.equal(publicContent.includes(phrase), false, `Found banned overclaim: ${phrase}`);
  }
});
