# Onyx AI Studio Site

Design-first Next.js website for Onyx AI Studio, repositioned around AI Business Operations Integration.

Current service expansion: Right-Sized Private AI Systems at `/services/private-ai-systems`, supported by the `/insights/private-ai-vs-cloud-ai-small-businesses` decision guide.

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
- `src/lib/contact-leads.ts`: server-side Supabase lead persistence helper for `/api/contact`.
- `public/`: production SVG assets and `llms.txt`.
- `supabase/onyx_contact_leads.sql`: idempotent schema for the Onyx contact lead table.
- `DESIGN.md`, `PDD.md`, `PFD.md`, `SOP.md`: design and operating docs.
- `PROJECT_STATE.md`, `TASKS.md`, `ISSUES.md`, `DECISIONS.md`: restartable project state.
- `GSC_INDEXING.md`: Google Search Console sitemap and indexing checklist.

## Notes
- Keep public copy free of personal details from private parent-context files.
- The contact form posts AI Operations Review requests to `/api/contact`, which stores the lead in Supabase and sends the notification through the Resend API.
- `/portfolio` is the client-facing hub for all 20 live SaaS demos at `https://onyx-portfolio-demos.vercel.app/apps`; `/case-studies` remains live for deeper case studies.
- Private AI systems are custom-scoped through the AI Operations Review; hardware and deployment choices are recommended after workflow, data, privacy, budget, and cloud-fallback fit are reviewed.
- Update `NEXT_PUBLIC_SITE_URL` when the final domain is confirmed.
- Server-side lead persistence requires `SUPABASE_URL` or `SUPABASE_REST_URL` plus `SUPABASE_SECRET_KEY`; never expose the secret key with a `NEXT_PUBLIC_` name.
