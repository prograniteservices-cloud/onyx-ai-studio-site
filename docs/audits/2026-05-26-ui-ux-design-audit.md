# UI/UX Design Audit - Onyx AI Studio

Compiled: 2026-05-26
Target site: https://onyxaistudio.digital
Target repo: `C:\Users\heath\Desktop\Projects\seo-presence-hub\onyx-ai-studio-site`
Auditor: UI/UX and visual design agent

## Executive Scorecard

UI/UX health score: **82/100**

Onyx AI Studio feels more credible than a generic AI agency site. The offer is specific, pricing is transparent, and the visual system is controlled. The main gaps are mobile navigation, above-the-fold proof, form friction, and stronger third-party trust signals for a high-ticket AI operations integration service.

| Area | Score | Notes |
| --- | ---: | --- |
| Visual identity | 88 | Restrained editorial systems aesthetic is coherent and differentiated. |
| Offer comprehension | 82 | "AI business operations integration" is clearer than vague AI automation language. |
| Conversion path | 70 | Mobile CTA access and form friction need work. |
| Trust and proof | 74 | Good internal proof, but not enough external/outcome-based evidence. |
| Mobile UX | 68 | Horizontal nav hides high-intent destinations and no persistent review CTA exists. |
| Accessibility UX | 78 | Lighthouse baseline is strong, but status feedback and minor ARIA flags remain. |

## Design And UX Strengths

- Strong positioning: "AI business operations integration" is clearer than vague AI automation language.
- Visual identity is consistent: serif editorial headings, navy/teal/brass accents, paper-like background, and restrained cards.
- Pricing page is unusually clear for agency work: setup ranges, monthly ranges, and separate usage costs are visible.
- Contact page has good buyer qualification language: good fits, weak fits, expected next step, and founder profile.
- Accessibility baseline is strong: Lighthouse accessibility score was 95 in spot checks.
- Reduced-motion CSS exists, and focus styles are present in inspected components.
- Portfolio and case-study framing gives the agency concrete proof beyond "we build AI."

## Design And UX Weaknesses

1. **High: Mobile navigation is the biggest UX weakness.**
   The mobile header uses horizontal scroll navigation, hiding important destinations like Pricing and Contact offscreen. There is no persistent mobile `AI Operations Review` CTA in the header. This weakens the primary conversion path.

2. **High: Homepage first viewport is visually strong but slow to convert.**
   At desktop width, the hero dominates the full viewport and does not reveal much proof below it. On mobile, graph lines sit behind body copy and add visual noise around the main message.

3. **High: Contact form asks for too much before trust is fully earned.**
   The form has many required fields, including industry, locations, call volume, main problem, assistant scope, and notes. For a high-ticket review this is defensible, but on mobile it feels like an intake form before the visitor has seen enough risk reduction.

4. **Medium-high: Trust proof is still mostly self-authored.**
   Founder LinkedIn, portfolio demos, pricing, and process proof help. Missing elements include client testimonials, implementation screenshots, before/after workflow examples, named outcomes, data-handling/security assurances, and clearer "what happens after you submit" detail.

5. **Medium: Service cards are dense.**
   The services page reads as thoughtful, but paragraph-heavy. Buyers scanning for "which service fits me?" may not quickly distinguish outcomes, timelines, and decision criteria.

6. **Medium: Portfolio breadth may dilute business credibility.**
   "20 live SaaS demos" is impressive, but some buyers may read it as demo breadth rather than operational implementation proof. Demos should be explicitly mapped to business problems: missed calls, lead routing, knowledge search, document QA, scheduling, and follow-up.

7. **Low-medium: Minor accessibility issues remain.**
   Lighthouse flagged `aria-allowed-attr` on a separator and `label-content-name-mismatch` on logo links. Form success/error messages should also be announced with `aria-live`.

## Priority Recommendations

1. **Fix mobile header and CTA path.**
   Target: `src/components/site-header.tsx`. Replace or supplement horizontal nav with a compact menu plus visible `Review` CTA. Add active page state.

2. **Tighten homepage first viewport.**
   Target: `src/app/page.tsx`. Reduce mobile hero height, lower graph contrast behind text, and bring one proof strip or outcome row into the first viewport.

3. **Reduce contact-form friction.**
   Target: `src/components/contact-form.tsx`. Make only name, email, business, main problem, and notes required. Move call volume, locations, and assistant scope into optional qualifiers or a second step.

4. **Add stronger trust modules.**
   Target: homepage, contact, pricing, and case studies. Add "What you get after the review," a sample workflow map, sample lead/call summary, implementation timeline, privacy/data handling note, and quantified case-study outcomes.

5. **Make services more scannable.**
   Target: services page and service cards. Convert long cards into compact `problem / system / output / best fit` blocks with a CTA per service.

6. **Fix accessibility flags.**
   Target: logo/separator components and contact status messages. Remove invalid separator ARIA, align logo accessible names with visible text, and add `aria-live` for form submission feedback.

## Evidence Gathered

- Live pages reviewed: https://onyxaistudio.digital, `/services`, `/portfolio`, `/pricing`, and `/contact`.
- Viewports checked: desktop `1440x1000`, mobile `390x844`.
- Screenshot checks used through Playwright.
- Lighthouse accessibility spot-check: 95/100, with `aria-allowed-attr` and `label-content-name-mismatch` findings.
- Files inspected: `src/components/site-header.tsx`, `src/components/contact-form.tsx`, `src/app/globals.css`, `src/lib/site-data.ts`, `DESIGN.md`, and Onyx wiki project context.

No files were edited by the audit agent, and no raw secrets were inspected.
