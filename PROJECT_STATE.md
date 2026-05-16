# Project State

Updated: 2026-05-16

## Current Goal
Reposition the Onyx AI Studio website around AI Business Operations Integration while preserving existing portfolio, insights, service proof, and app demos.

## Current Status
- Next.js scaffold exists and is the active app.
- Requested design and SEO skills were installed into the global Codex skills directory.
- The installed skills validate with `quick_validate.py`.
- Current Codex session cannot auto-load newly installed skills until restart, so this session used their files directly.
- `shadcn init` timed out after writing partial `components.json`; owned primitives are completed manually and config is locked to `new-york` with `neutral`.
- Website implementation is complete for the first version: home, services, service detail pages, case studies, insight pages, contact page, assets, metadata, sitemap, robots, and `llms.txt`.
- App folder is a Git repository connected to `https://github.com/prograniteservices-cloud/onyx-ai-studio-site`.
- Latest pushed branch: `master`.
- Vercel project: `onyx-ai-studio-site`.
- Production URL: `https://onyxaistudio.digital`.
- Vercel production env includes `NEXT_PUBLIC_SITE_URL=https://onyxaistudio.digital`.
- Repositioning source files are in the app root: `Site_Repositioning_Prompt.txt` and `AI_Business_Integration_System.txt`.
- Homepage now leads with AI reception, lead capture, scheduling, website assistance, data handling, and internal business assistance.
- Navigation now supports the new hierarchy: AI Business System, Reception + Web Assistant, Internal Assistant, Portfolio, Insights, Pricing, and Contact.
- Existing portfolio projects remain and are reframed as proof of AI operations modules, assistant interfaces, lead capture, workflow automation, data handling, and custom implementation ability.
- `/pricing` now presents premium implementation and monthly management ranges with client-paid Retell and third-party usage called out.
- Contact form and `/api/contact` now use the AI Operations Review schema: name, business name, email, phone, website, industry, locations, call volume, main problem, assistant scope, and notes.
- Motion enhancement pass is live: animated hero systems visual, scroll reveals, glass panels/cards, and refined sticky glass header.
- Google Search Console ownership is verified by DNS record.
- Search Console indexing-readiness checks pass from this machine; manual sitemap submission and URL inspection are pending in the browser.
- Sitemap redirect/indexing work is intentionally paused until outreach/content execution is moving again.
- VapeOS outreach workflow exists under `scripts/` and `outreach/vape/`.
- Vape batch 01 has 15 email-ready approved South Carolina prospects, 2 Manning-area manual-form prospects, and 3 rejects. More research is needed to reach the planned 25 approved shops.
- Estimate-tool outreach remains active but waiting: 155 companies contacted, 1 reply, demo sent, next step is a timed follow-up.
- Vape2.0 owner-son follow-up is dormant unless they re-engage.

## Commands
- Dev: `npm.cmd run dev`
- Lint: `npm.cmd run lint`
- Test: `npm.cmd run test`
- Build: `npm.cmd run build`
- Audit: `npm.cmd audit --audit-level=high`
- Vape outreach review: `npm.cmd run outreach:vape:review`
- Vape outreach dry run: `npm.cmd run outreach:vape:dry-run`

## Known Constraints
- Root `seo-presence-hub` remains a planning workspace; this app folder is the deployable Git repository.
- Private parent-context files must not be used in public copy.
- Contact form is fully integrated with Infomaniak SMTP (`projects@onyxaistudio.digital`) via a secure API route (`/api/contact`).
- Vercel production env includes `INFOMANIAK_EMAIL`, `INFOMANIAK_TOKEN`, `INFOMANIAK_SMTP_HOST`, and `INFOMANIAK_SMTP_PORT`.
- Cinematic hero animation and peripheral branding are live and mobile-responsive.
- Google Search Console ownership is verified by DNS record.
- Live sending requires `RESEND_API_KEY` and `ONYX_PHYSICAL_MAILING_ADDRESS`. The sender refuses `--send` without both.

## Next Action
Review the repositioning locally, then deploy/push when approved. After that, resume the paused VapeOS outreach tasks.

## Verification
- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed; 19 static pages generated.
- `npm.cmd audit --audit-level=high`: passed threshold; moderate Next/PostCSS advisory remains.
- Public identifier scan over `src` and `public`: no matches.
- Desktop screenshot: `qa-desktop.png`.
- Mobile screenshot: `qa-mobile.png`.
- Route checks: all planned app routes plus `/robots.txt`, `/sitemap.xml`, and `/llms.txt` returned HTTP 200.
- Dev server error log: empty after final screenshot pass.
- GitHub push: commit `ba9cce7` pushed to `prograniteservices-cloud/onyx-ai-studio-site`.
- Vercel production deploy: passed and aliased to `https://onyx-ai-studio-site.vercel.app`.
- Live route checks: all planned app routes plus `/robots.txt`, `/sitemap.xml`, and `/llms.txt` returned HTTP 200 on the production URL.
- Live sitemap and robots: verified they reference `https://onyx-ai-studio-site.vercel.app`.
- Motion pass local validation: `npm.cmd run lint`, `npm.cmd run build`, `npm.cmd audit --audit-level=high`, public identifier scan, desktop screenshot `qa-motion-desktop.png`, and mobile screenshot `qa-motion-mobile.png`.
- Motion pass GitHub push: commit `1db5e11` pushed to `master`.
- Motion pass Vercel production deploy: passed and aliased to `https://onyxaistudio.digital`.
- Vercel production env updated to `NEXT_PUBLIC_SITE_URL=https://onyxaistudio.digital`.
- Live custom-domain route checks: all planned app routes plus `/robots.txt`, `/sitemap.xml`, and `/llms.txt` returned HTTP 200.
- Live sitemap and robots: verified they reference `https://onyxaistudio.digital`.
- Production screenshots: `qa-prod-motion-desktop.png` and `qa-prod-motion-mobile.png`.
- Search Console readiness: Vercel domain inspect confirms `onyxaistudio.digital` is attached to `onyx-ai-studio-site`, nameservers are correct, all 14 sitemap URLs return HTTP 200, robots/sitemap reference only the custom domain, homepage canonical and Open Graph URL use the custom domain, JSON-LD is present, and no `noindex` was found.
- Vape outreach workflow: `npm.cmd run test` passed 11/11 tests, including validation, review generation, dry-run email construction, and duplicate protection.
- Vape outreach dry run: `npm.cmd run outreach:vape:dry-run` reported sender `Onyx AI Studio <hello@onyxaistudio.digital>`, reply-to `prograniteservices@gmail.com`, 15 recipients, compliance footer, and first-email preview.
- Content validation: `npm.cmd run lint` passed; `npm.cmd run build` passed with 21 static pages, including `/insights/ai-inventory-search-vape-shops-messy-catalogs`.
- Dependency audit: upgraded Next to `16.2.6`; `npm.cmd audit --audit-level=high` passed. Moderate PostCSS advisory remains.
- Public identifier scan over `src` and `public`: no matches for private source-context strings.
- Visual QA: desktop and mobile screenshots captured for the new insight route as `qa-vape-insight-desktop.png` and `qa-vape-insight-mobile.png`; route returned HTTP 200 on local port 3001.
- AI operations repositioning validation: `npm.cmd run lint` passed.
- AI operations repositioning validation: `npx.cmd tsc --noEmit` passed.
- AI operations repositioning validation: `npm.cmd run build` passed with 25 generated pages, including `/pricing` and the expanded service routes.
- AI operations repositioning validation: `npm.cmd run test` passed 13/13 tests.
- AI operations repositioning validation: `npm.cmd audit --audit-level=high` exited 0; moderate PostCSS advisory remains tracked in ISSUE-005.
- AI operations repositioning validation: public identifier scan over `src` and `public` found no matches.
- AI operations repositioning route checks: `/`, `/services`, all seven service detail routes, `/pricing`, `/case-studies`, `/insights`, `/contact`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt` returned HTTP 200 locally.
- AI operations form validation: incomplete `POST /api/contact` returned HTTP 400, confirming required-field validation before SMTP send.
- AI operations visual QA: `qa-repositioning-desktop.png`, `qa-repositioning-mobile.png`, `qa-repositioning-contact-desktop.png`, and `qa-repositioning-contact-mobile.png`.
