# Project State

Updated: 2026-05-05

## Current Goal
Maintain and deploy the design-first, SEO-ready Onyx AI Studio website inside `onyx-ai-studio-site/`.

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
- Motion enhancement pass is live: animated hero systems visual, scroll reveals, glass panels/cards, and refined sticky glass header.
- Google Search Console ownership is verified by DNS record.
- Search Console indexing-readiness checks pass from this machine; manual sitemap submission and URL inspection are pending in the browser.

## Commands
- Dev: `npm.cmd run dev`
- Lint: `npm.cmd run lint`
- Build: `npm.cmd run build`
- Audit: `npm.cmd audit --audit-level=high`

## Known Constraints
- Root `seo-presence-hub` remains a planning workspace; this app folder is the deployable Git repository.
- Private parent-context files must not be used in public copy.
- Contact form is fully integrated with Infomaniak SMTP (`projects@onyxaistudio.digital`) via a secure API route (`/api/contact`).
- Vercel production env includes `INFOMANIAK_EMAIL`, `INFOMANIAK_TOKEN`, `INFOMANIAK_SMTP_HOST`, and `INFOMANIAK_SMTP_PORT`.
- Cinematic hero animation and peripheral branding are live and mobile-responsive.
- Google Search Console ownership is verified by DNS record.

## Next Action
In Google Search Console, submit `https://onyxaistudio.digital/sitemap.xml` and request indexing for the priority URLs listed in `GSC_INDEXING.md`. Monitor the contact form for incoming leads.

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
