# SEO, GEO, Agentic Search, And Marketing Audit - Onyx AI Studio

Compiled: 2026-05-26
Audit scope date: 2026-05-25 checks, with some live HTTP headers returning UTC dates on 2026-05-26
Target site: https://onyxaistudio.digital
Target repo: `C:\Users\heath\Desktop\Projects\seo-presence-hub\onyx-ai-studio-site`
Auditor: SEO/GEO/marketing agent

## Executive Scorecard

Overall SEO/GEO/marketing health score: **79/100**

| Area | Score | Notes |
| --- | ---: | --- |
| Technical SEO | 88 | Crawlability, sitemap, robots, canonical, and static rendering are strong. |
| Indexability/crawlability | 90 | Sitemap URLs return 200, self-canonical, indexable pages. |
| Schema/structured data | 82 | Broad JSON-LD coverage exists, including organization/person/article/breadcrumb patterns. |
| On-page/content quality | 70 | Service and proof pages are still thin for competitive buyer-intent ranking. |
| GEO/AI search readiness | 76 | `llms.txt`, AI crawler access, and answer-ready structure are present, but authority and proof depth are thin. |
| Marketing/conversion | 78 | Offer clarity and pricing are strong; proof and CTA friction need work. |

## Strengths

- The live site is crawlable: `sitemap.xml` returns 200, lists 27 URLs, and every sitemap URL checked returned 200, self-canonical, `index, follow`, and no `X-Robots-Tag`.
- The site is mostly static/SSG. `next build` shows the homepage, services, pricing, portfolio, case studies, insights, robots, and sitemap are prerendered/SSG; only `/api/contact` is dynamic.
- `robots.txt` is clean and GEO-aware: Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, and PerplexityBot are allowed; CCBot is blocked.
- `/llms.txt` exists, returns 200, and gives AI crawlers a useful map of main pages, service pages, proof pages, insight pages, pricing, and key facts.
- JSON-LD coverage is strong: `ProfessionalService`, `Person`, `WebSite`, `CollectionPage`, `Service`, `FAQPage`, `BlogPosting`, `Article`, `ContactPage`, and `BreadcrumbList` are present where expected.
- Internal linking is coherent: primary nav, footer, service-to-case-study links, article related links, breadcrumbs, and homepage links create a clear crawl path.
- Offer clarity is better than typical AI agency sites: the site clearly frames Onyx as `AI business operations integration`, not a generic chatbot shop.
- Pricing is visible: implementation and monthly management ranges are stated, with Retell/third-party usage costs separated.
- Search Console already shows impressions for Onyx pages for 2026-05-18 to 2026-05-24, even though sitemap indexing data still lags.

## Weaknesses And Risks

1. **High: Search Console sitemap report still shows 0 indexed URLs.**
   `gsc:sitemaps` showed 27 submitted, 0 indexed, 0 warnings, 0 errors, last submitted/downloaded on 2026-05-25. This may be normal lag for a new/changed site, but it is the highest monitoring risk.

2. **High: Most service and proof pages are still thin for competitive SEO/GEO.**
   Live word counts: service detail pages roughly 391-535 words, case studies roughly 320-365 words, pricing 456, contact 373, `/case-studies` 424, and `/insights` 494. That is enough for crawlability, but light for ranking, AI citation, and buyer trust.

3. **High: External entity footprint appears weak and brand-confusable.**
   Web searches surfaced unrelated `Onyx AI Studio` or `Onyx AI` entities, including an unrelated UX/design startup profile and Onyx AI alternatives pages. This creates entity ambiguity unless Onyx AI Studio builds stronger sameAs, founder, company, and third-party mention signals.

4. **Medium-high: Performance remains a practical risk even though crawlability is fine.**
   Homepage HTML is about 214 KB. Live asset sampling found about 756 KB across CSS/JS/SVG assets referenced on the homepage, plus the process infographic can be served as high as about 968 KB through Next image optimization and is about 4.31 MB raw in `public`.

5. **Medium-high: Schema is broad, but authority depth is still shallow.**
   Founder `Person` schema exists and is referenced by articles, which is good. But there is no standalone About/founder authority page, no deep author bio on articles, limited external sameAs beyond LinkedIn, and no cited sources inside insight content.

6. **Medium: On-page targeting is still broad.**
   GSC query data for 2026-05-18 to 2026-05-24 only showed impressions for `ai operations` and `ai operations workspace`, with no clicks and weak average positions. The site needs more specific pages for buyer-intent queries.

7. **Medium: Conversion form may be high-friction for cold visitors.**
   The contact form has 11 fields/controls and 9 required fields. That may qualify leads well, but it risks suppressing early-stage prospects unless paired with a lower-friction CTA.

8. **Medium: Proof is credible but not yet outcome-heavy.**
   The portfolio and case studies show demos and capabilities, but many metrics are implementation/product facts rather than business outcomes, before/after numbers, screenshots of workflow outputs, or client-style proof narratives.

## Priority Recommendations

### Technical SEO

- Monitor GSC indexing for 7-14 days after the 2026-05-25 sitemap submission. If sitemap indexed count remains 0 while URL Inspection shows pages available, prioritize internal links, content depth, and external discovery rather than robots/sitemap fixes.
- Optimize homepage performance: reduce nonessential client JS, audit Framer Motion/ScrollReveal usage, keep first viewport static where possible, and reduce the largest image variants.
- Convert `onyx-ai-process-infographic.png` to a lighter WebP/AVIF source or provide a smaller generated asset; keep the raw 4.31 MB PNG out of critical paths.
- Use page-specific `lastModified` dates instead of stamping every sitemap URL with the same date when only some pages change.
- Consider adding trust/security headers on the main site: `X-Content-Type-Options`, `Referrer-Policy`, and a conservative CSP. This is not a direct ranking fix, but it supports technical trust.

### Content And GEO

- Expand the highest-value pages first: `/services/ai-integration`, `/services/reception-web-assistant`, `/services/internal-business-assistant`, `/insights/what-is-ai-operations-review`, `/case-studies/countertop-estimator`, and `/case-studies/vapeos`.
- Bring core service pages closer to 800-1,200 words with use cases, implementation steps, risk boundaries, buyer questions, and concrete examples.
- Turn case studies into stronger proof pages: problem, workflow, inputs, system design, measurable outputs, screenshots, demo links, and "what this proves for a buyer."
- Add self-contained answer blocks under question-based H2s, especially:
  - What is AI business operations integration?
  - What is an AI operations review?
  - What should an AI receptionist be allowed to answer?
  - How should small businesses separate public and internal AI assistants?
- Add source-backed passages where external platform claims are made. For example, cite official Retell/Supabase docs when explaining platform roles.
- Strengthen entity signals: create an About/Founder page, add a LinkedIn company profile if available, add GitHub/demo sameAs where appropriate, and keep naming consistent as `Onyx AI Studio` plus `AI business operations integration`.
- Keep `/llms.txt`, but consider adding last-updated dates and a tighter `Best pages to cite` section.

### Marketing And Conversion

- Keep the premium positioning, but sharpen the initial niche wedge. Current proof supports service businesses, quote tools, retail inventory/search, and operational lead capture. Pick 2-3 vertical landing pages instead of staying only broad.
- Add a lower-friction CTA beside the full review form: `Ask for a quick fit check` or `Send the website and main workflow problem.` The current long form can remain the qualified path.
- Put `what you get from the AI Operations Review` closer to the first CTA: deliverables, expected turnaround, and decision output.
- Add comparison content for buyer education:
  - AI receptionist vs chatbot.
  - AI operations integration vs SaaS subscription.
  - Public website assistant vs internal business assistant.
- Make proof more sales-oriented: show example lead summaries, call handoff outputs, quote-intake records, and staff-facing knowledge answers.
- Build one strong lead magnet/checklist: `AI Operations Readiness Checklist for Service Businesses`, then use it for LinkedIn, outreach, and internal linking.

## Evidence Gathered

- Read wiki index and relevant Onyx project page.
- Read repo files: `AGENTS.md`, `package.json`, `src/lib/site-data.ts`, `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `public/llms.txt`, route files, contact form, and footer.
- Live crawl script against all 27 sitemap URLs checking status, canonical, robots meta, H1 count, JSON-LD types, image alt coverage, and rough word count.
- `curl.exe -I -L` checks for:
  - `https://onyxaistudio.digital/`
  - `http://onyxaistudio.digital/`
  - `https://www.onyxaistudio.digital/`
  - `https://onyx-portfolio-demos.vercel.app/apps`
  - `https://estimate-tool-three.vercel.app`
  - `https://aikenirrigation.pro/`
- `curl.exe -s https://onyxaistudio.digital/robots.txt`
- `curl.exe -s https://onyxaistudio.digital/sitemap.xml`
- GSC wrapper:
  - `hgt.cmd gsc:sitemaps --site sc-domain:onyxaistudio.digital`
  - `hgt.cmd gsc:performance --site sc-domain:onyxaistudio.digital --start 2026-05-18 --end 2026-05-24 --dimensions page`
  - `hgt.cmd gsc:performance --site sc-domain:onyxaistudio.digital --start 2026-05-18 --end 2026-05-24 --dimensions query`
- Validation:
  - `npm.cmd run lint` passed.
  - `npm.cmd test` passed, 33/33.
  - `npx.cmd tsc --noEmit` passed.
  - `npm.cmd run build` passed.
  - `npm.cmd audit --audit-level=high` passed with 3 moderate advisories.
- Lighthouse was attempted with `npx lighthouse`, but failed during Windows temp cleanup with `EPERM`; no fresh Lighthouse score was used from that run.

No files were edited by the audit agent, and no raw secrets were inspected.
