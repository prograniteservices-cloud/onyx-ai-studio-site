<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Onyx AI Studio Codex Guide

## Project Role
This folder is the website app for Onyx AI Studio. Keep all website implementation, assets, and app-specific continuity files inside this folder.

## Read Order
1. `AGENTS.md`
2. `PROJECT_STATE.md`
3. `TASKS.md`
4. `ISSUES.md`
5. `DECISIONS.md`
6. `DESIGN.md`
7. `PDD.md`
8. `PFD.md`
9. `SOP.md`

## Required Workflow
- Preserve this Next.js warning block when editing `AGENTS.md`.
- Read relevant bundled Next.js docs under `node_modules/next/dist/docs/` before editing routes, metadata, layouts, navigation, images, or build configuration.
- Use design-first work: update `DESIGN.md` before changing visible UI.
- Keep the site light-mode-first, professional, editorial, and high-trust.
- Use shadcn-style owned primitives from `src/components/ui/` before ad hoc controls.
- Use `new-york` style and `neutral` base color in `components.json`.
- Use `npm.cmd`, not `npm`, on this Windows machine.
- Do not publish personal details from private parent-context files.

## Commands
- `npm.cmd run dev`: start local development.
- `npm.cmd run lint`: run ESLint.
- `npm.cmd run build`: run production build.
- `npm.cmd audit --audit-level=high`: high severity dependency audit.

## Validation Rules
- Run lint, build, high-severity audit, public identifier scan, and visual desktop/mobile QA before calling work complete.
- Log failures and fixes in `ISSUES.md`.
- Keep `PROJECT_STATE.md` and `TASKS.md` aligned with meaningful changes.
