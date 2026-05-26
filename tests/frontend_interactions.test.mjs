import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("mobile menu supports Escape close and focus return", () => {
  const source = read("src/components/site-header.tsx");

  assert.match(source, /useRef/);
  assert.match(source, /menuButtonRef/);
  assert.match(source, /event\.key === "Escape"/);
  assert.match(source, /menuButtonRef\.current\?\.focus\(\)/);
});

test("required contact fields visibly mark required inputs", () => {
  const source = read("src/components/contact-form.tsx");

  assert.match(source, /required=\{true\}/);
  assert.match(source, /aria-hidden="true"/);
  assert.match(source, /Required/);
});

test("scroll reveal keeps content visible without fragile JavaScript dependency", () => {
  const reveal = read("src/components/scroll-reveal.tsx");
  const hydrator = read("src/components/scroll-reveal-hydrator.tsx");

  assert.match(reveal, /data-state="visible"/);
  assert.match(hydrator, /prefers-reduced-motion: reduce/);
  assert.match(hydrator, /dataset\.motionReady = "true"/);
});
