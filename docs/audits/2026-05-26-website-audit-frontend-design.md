# Website Audit: Frontend Design And Engineering

Date: 2026-05-26
Site: https://onyxaistudio.digital
Workflow: Website Audit
Agent role: Frontend Design / Engineering Auditor
Final score: 84/100

## Summary

Onyx AI Studio is technically credible after the correction sprint. The mobile Review CTA and header are improved, the App Router footprint is mostly server-rendered, Framer has been removed from the main path, form semantics are stronger, and sampled live routes are indexable with one H1 and self-canonical metadata.

The remaining frontend risk is not a redesign problem. It is performance, conversion hardening, interaction polish, and maintainability.

## Strengths

- Mobile header and Review CTA are no longer obvious conversion blockers.
- The app is mostly server-rendered; the known client components are limited to `site-header.tsx`, `contact-form.tsx`, and `scroll-reveal-hydrator.tsx`.
- Framer was removed from the main frontend path.
- Skip link, `main`, `aria-current`, visible labels, form status handling, and required lead fields are improved.
- Live route sampling found 200 responses, one H1, self-canonical metadata, and no `noindex` on tested pages.
- The current visual system is distinctive enough to support premium positioning.

## Weaknesses And Risks

- Homepage payload remains heavier than ideal: roughly 215 KB HTML, 62 script tags, and about 690 KB across sampled external JS chunks.
- Many ScrollReveal wrappers and the global hydrator still create animation and hydration cost.
- The mobile hero graph can compete with the primary message.
- The form should still get stronger required-field cues and tighter focus/error behavior.
- The mobile menu still needs Escape handling and focus return.
- `src/lib/site-data.ts` is a large maintainability hot spot.
- The homepage is long; proof hierarchy needs stronger prioritization so visitors do not have to process everything.

## Priority Recommendations

1. Productize the AI Operations Review as a clear frontend offer with deliverables, timeline, fit criteria, price/free/credited model, and expected output.
2. Add a granite/countertop landing path with niche-specific intake examples, quote workflow pain points, and a direct Review CTA.
3. Rebuild proof hierarchy around outcomes: missed-call capture, quote-intake structure, follow-up visibility, saved lead records, and operational before/after states.
4. Add privacy and trust language near the form explaining what is saved, how it is used, no resale/no spam expectations, and the human follow-up path.
5. Make the Supabase lead pipeline visible to the operator through a lightweight internal dashboard or equivalent view.
6. Reduce homepage script and reveal cost while preserving the current visual identity.
7. Add Escape and focus-return behavior to the mobile menu.

## Evidence Gathered

- Reviewed the current repo shape and recent correction-sprint context.
- Checked the live site behavior and route metadata.
- Compared frontend risks against UI/UX, SEO/GEO, and business audit findings.

## Roundtable Position

The agent agreed with the cross-functional consensus: the site is no longer blocked by basic crawlability, mobile structure, or visual credibility. The next gains are conversion, proof, trust, and performance.

The agent cautioned against broad visual redesign or more animation. The current system works; the work should sharpen the sales path and reduce avoidable frontend weight.

Score stayed at 84/100.
