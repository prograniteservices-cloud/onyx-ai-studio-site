# Frontend Engineering Audit - Onyx AI Studio

Compiled: 2026-05-26
Target site: https://onyxaistudio.digital
Target repo: `C:\Users\heath\Desktop\Projects\seo-presence-hub\onyx-ai-studio-site`
Auditor: Frontend implementation agent

## Executive Scorecard

Frontend health score: **78/100**

The site is structurally solid. The App Router implementation is clean, most marketing pages prerender, validation passes, metadata and SEO plumbing are strong, and client JavaScript is limited to a few islands. The main deductions are for performance risk from decorative client animation, contact form accessibility gaps, lack of browser/a11y regression tests, and maintainability pressure from an oversized centralized data module.

| Area | Score | Notes |
| --- | ---: | --- |
| Next.js structure | 88 | App Router, static pages, dynamic routes, metadata routes, and API route are organized well. |
| Build and validation | 92 | Lint, TypeScript, test, and build checks passed in the audit. |
| SSR and indexability | 90 | Pages are mostly static/SSG and live crawl checks showed healthy HTML. |
| Performance risk | 66 | Decorative animation and several client reveal islands add JS/TBT pressure. |
| Accessibility implementation | 74 | Baseline is good, but form feedback, skip link, and minor ARIA issues need work. |
| Maintainability | 72 | Component boundaries are decent, but `site-data.ts` is carrying too much content and structure. |

## Strengths

- Strong App Router layout: `src/app` uses static pages, dynamic SSG routes, route metadata, `sitemap.ts`, `robots.ts`, and route handlers cleanly.
- Production build is healthy: `next build` passed and generated static/SSG output for all marketing pages; only `/api/contact` is dynamic.
- Good SSR/indexability posture: live checks found 200 responses, one `h1` on key pages, sitemap coverage, and no missing image `alt` attributes in rendered tags.
- Fonts and images are generally handled well: `next/font/google` uses `display: "swap"` in `src/app/layout.tsx`, and `next/image` usage includes explicit dimensions.
- Component boundaries are mostly clear: shared UI primitives, layout components, JSON-LD, section headings, contact form, and route pages are separated reasonably.
- Validation is currently clean: ESLint, TypeScript, tests, and production build passed during the audit.

## Weaknesses And Risks

1. **High: `/services` ships a heavy Framer Motion client island for mostly decorative content.**
   `src/app/services/page.tsx` imports `HeroSystemVisual`, which imports `RefractiveCore`; `RefractiveCore` is a client component using `framer-motion`. The live `/services` page decoded external JS was about 758 KB, higher than the homepage. The visual also includes a `BEGIN SYNTHESIS` button with no action.

2. **High: Homepage reveal animation creates many client boundaries for a static marketing page.**
   `ScrollReveal` uses `IntersectionObserver` and state, and it is used repeatedly across `src/app/page.tsx`. The live homepage HTML was about 214 KB, with 10 external scripts and about 676 KB decoded JS. This aligns with the recent Lighthouse Total Blocking Time concern.

3. **High: Contact form feedback is not accessible enough for async status and errors.**
   Success/error messages in `src/components/contact-form.tsx` do not use `aria-live`, `role="status"`, or focus management. Failed submissions also do not focus the first invalid/problem field.

4. **Medium-high: The contact frontend can report failure after a lead was already saved.**
   The API saves the Supabase lead before sending email. If Resend fails after persistence succeeds, the frontend can show a generic failure even though the lead exists. That creates duplicate-submit risk and user confusion.

5. **Medium: Finite dynamic routes do not explicitly disable unknown dynamic params.**
   `generateStaticParams()` exists for services, insights, and case studies, but the route files do not export `dynamicParams = false`. For a finite marketing site, unknown slugs should 404 without runtime generation work.

6. **Medium: No skip link or main landmark target for keyboard users.**
   The layout has a `<main>` element, but no skip link before the sticky header and no `id` target.

7. **Medium: `site-data.ts` is becoming an oversized mixed-content module.**
   `src/lib/site-data.ts` mixes constants, navigation, icons, service data, portfolio demos, insight body content, schema helpers, and lookup functions. This is workable now, but it increases accidental client-bundle risk and merge-conflict risk as content grows.

8. **Low-medium: Frontend tests do not exercise browser behavior.**
   Current tests cover copy, SEO, sitemap, contact lead mapping, and outreach scripts, but there is no Playwright/Cypress/axe coverage for the live form, keyboard navigation, responsive nav, focus states, or reduced-motion behavior.

9. **Low: Minor UI implementation issues remain.**
   Examples: loading text uses `Sending...` instead of a typographic or styled loading state, placeholder copy uses `...`, and external links use `rel="noreferrer"` without explicit `noopener noreferrer`.

## Priority Recommendations

1. **Replace the `/services` Framer visual with static/CSS-first markup.**
   Remove `framer-motion` unless it is needed elsewhere. Convert `RefractiveCore` to a server component plus CSS keyframes, remove the dead `BEGIN SYNTHESIS` button, and keep reduced-motion behavior in CSS.

2. **Reduce homepage client animation cost.**
   Use CSS reveal where possible, or one parent observer instead of many `ScrollReveal` islands. Keep the above-the-fold hero fully server-rendered and avoid client wrappers around static content sections.

3. **Harden contact form UX/accessibility.**
   Add `aria-live="polite"` or `role="status"` for success and error messages, use clear loading text, focus the status/error block after submit failure, and consider inline validation before network submission.

4. **Make contact submission semantics explicit.**
   If persistence succeeds but email fails, return a distinct response or store notification status separately. The frontend should not encourage duplicate submissions for already-saved leads.

5. **Lock finite dynamic routes.**
   Add `export const dynamicParams = false` to `[slug]` route files for services, case studies, and insights.

6. **Add a small frontend regression suite.**
   Minimum useful set: Playwright smoke tests for homepage/contact/portfolio at mobile and desktop, axe check for contact form, keyboard tab path through header/form, and reduced-motion check.

## Evidence Gathered

- `rg --files src public tests`
- `npm.cmd run lint` passed.
- `npx.cmd tsc --noEmit` passed.
- `npm.cmd test` passed, 33/33.
- `npm.cmd run build` passed.
- `npm.cmd ls framer-motion lucide-react next react react-dom --depth=0`
- Live fetch checks for `/`, `/contact`, `/services`, `/portfolio`, `/case-studies`, `/insights`, `/pricing`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt`.
- Live asset check: homepage about 214 KB HTML, 10 external scripts, about 676 KB decoded JS; `/services` about 107 KB HTML, 9 external scripts, about 758 KB decoded JS.
- Live `/api/contact` empty POST returned expected `400`.
- Files reviewed included `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/services/page.tsx`, dynamic route pages, `src/components/contact-form.tsx`, `src/components/scroll-reveal.tsx`, `src/components/refractive-core.tsx`, `src/components/hero-system-visual.tsx`, `src/components/site-header.tsx`, `src/app/globals.css`, `src/lib/site-data.ts`, `src/app/sitemap.ts`, and `src/app/robots.ts`.

No files were edited by the audit agent, and no raw secrets were inspected.
