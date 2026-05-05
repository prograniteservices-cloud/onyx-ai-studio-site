# Onyx AI Studio Site

Design-first Next.js website for Onyx AI Studio.

Live production URL: https://onyx-ai-studio-site.vercel.app

## Commands

```powershell
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
npm.cmd audit --audit-level=high
```

## Structure
- `src/app/`: App Router routes, metadata routes, sitemap, robots.
- `src/components/`: shared layout, form, JSON-LD, and UI primitives.
- `src/lib/site-data.ts`: services, case studies, insights, navigation, and route data.
- `public/`: production SVG assets and `llms.txt`.
- `DESIGN.md`, `PDD.md`, `PFD.md`, `SOP.md`: design and operating docs.
- `PROJECT_STATE.md`, `TASKS.md`, `ISSUES.md`, `DECISIONS.md`: restartable project state.

## Notes
- Keep public copy free of personal details from private parent-context files.
- The contact form uses `mailto:` until a real form endpoint is approved.
- Update `NEXT_PUBLIC_SITE_URL` when the final domain is confirmed.
