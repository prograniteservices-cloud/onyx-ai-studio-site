# Onyx AI Studio Site

Design-first Next.js website for Onyx AI Studio, repositioned around AI Business Operations Integration.

Live production URL: https://onyxaistudio.digital

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
- `src/lib/site-data.ts`: services, portfolio demo metadata, case studies, insights, navigation, and route data.
- `public/`: production SVG assets and `llms.txt`.
- `DESIGN.md`, `PDD.md`, `PFD.md`, `SOP.md`: design and operating docs.
- `PROJECT_STATE.md`, `TASKS.md`, `ISSUES.md`, `DECISIONS.md`: restartable project state.
- `GSC_INDEXING.md`: Google Search Console sitemap and indexing checklist.

## Notes
- Keep public copy free of personal details from private parent-context files.
- The contact form posts AI Operations Review requests to `/api/contact`, which sends through Infomaniak SMTP.
- `/portfolio` is the client-facing hub for all 20 live SaaS demos at `https://onyx-portfolio-demos.vercel.app/apps`; `/case-studies` remains live for deeper case studies.
- Update `NEXT_PUBLIC_SITE_URL` when the final domain is confirmed.
