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
- Production URL: `https://onyx-ai-studio-site.vercel.app`.
- Vercel production env includes `NEXT_PUBLIC_SITE_URL=https://onyx-ai-studio-site.vercel.app`.

## Commands
- Dev: `npm.cmd run dev`
- Lint: `npm.cmd run lint`
- Build: `npm.cmd run build`
- Audit: `npm.cmd audit --audit-level=high`

## Known Constraints
- Root `seo-presence-hub` remains a planning workspace; this app folder is the deployable Git repository.
- Private parent-context files must not be used in public copy.
- Contact form uses `mailto:` until a real form backend or inbox routing is approved.
- Production metadata and sitemap currently use the Vercel alias through `NEXT_PUBLIC_SITE_URL`; update that env var when a custom domain is connected.
- npm audit reports a moderate PostCSS advisory through Next. The high-severity audit passes, and the suggested force fix is a breaking downgrade.

## Next Action
Connect a custom domain when ready. Replace the `mailto:` form once the final inbox or form backend is approved. Restart Codex when convenient so newly installed skills auto-load in future sessions.

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
