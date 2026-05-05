# Standard Operating Procedure

## Purpose
This SOP keeps Onyx AI Studio website work design-led, restartable, and safe from accidental personal-detail leaks.

## 1. Start Of Session
- Read `AGENTS.md`, `PROJECT_STATE.md`, `TASKS.md`, `ISSUES.md`, and `DECISIONS.md`.
- Check `git status` if this folder later becomes a Git repository.
- Read the relevant local Next.js docs before app-router or metadata edits.
- Use `npm.cmd` for all npm commands on this machine.

## 2. Design Before Implementation
- Update `DESIGN.md` before changing visible UI.
- Use the installed design skills as reference:
  - `ui-ux-pro-max`
  - `frontend-design`
  - `tailwind-design-system`
  - `form-cro`
  - `ui-visual-validator`
- Keep the aesthetic light editorial, professional, and proof-led.
- Avoid generic SaaS gradients, dark-mode starter behavior, and public personal details.

## 3. Implementation
- Keep routes in `src/app/`.
- Keep reusable content in `src/lib/site-data.ts`.
- Keep shared UI in `src/components/`.
- Keep production assets in `public/`.
- Prefer Server Components unless a component needs browser state.
- Use `Link` for internal navigation.
- Use `next/image` for meaningful visual assets.

## 4. SEO And GEO
- Keep metadata on every major page.
- Keep `src/app/sitemap.ts`, `src/app/robots.ts`, and `public/llms.txt` updated when routes change.
- Use JSON-LD for Organization, WebSite, Service, Article, BreadcrumbList, and FAQ content where applicable.
- Use self-contained, quotable copy blocks and question-based headings for AI search readiness.

## 5. QA
- Run `npm.cmd run lint`.
- Run `npm.cmd run build`.
- Run `npm.cmd audit --audit-level=high`.
- Scan public files for personal identifiers.
- Verify desktop and mobile screenshots.
- Check keyboard focus states and form labels.
- Record every failure and fix in `ISSUES.md`.

## 6. Handoff
- Mark completed work in `TASKS.md`.
- Update `PROJECT_STATE.md` with current status, commands, blockers, and next action.
- Leave unresolved problems in `ISSUES.md`.
