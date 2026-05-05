# Tasks

## Phase 1 - Skill Installation
- [x] Inventory requested source skill folders from `Desktop\skills\antigravity-awesome-skills`.
- [x] Copy selected skills into the global Codex skills directory.
- [x] Normalize each `SKILL.md` frontmatter to `name` and `description`.
- [x] Preserve useful scripts, data, resources, references, and assets.
- [x] Validate copied skill structures with `quick_validate.py`.
- [ ] Restart Codex so newly installed skills auto-load in future sessions.

## Phase 2 - Directives And State
- [x] Preserve the Next.js warning in `AGENTS.md`.
- [x] Replace starter directive with website-specific Codex guide.
- [x] Create `SOP.md`.
- [x] Create `PDD.md`.
- [x] Create `PFD.md`.
- [x] Create `DESIGN.md`.
- [x] Create `PROJECT_STATE.md`.
- [x] Create `TASKS.md`.
- [x] Create `ISSUES.md`.
- [x] Create `DECISIONS.md`.

## Phase 3 - App Setup
- [x] Confirm the existing Next.js scaffold is present.
- [x] Attempt shadcn initialization.
- [x] Lock shadcn config to New York style and Neutral base color.
- [x] Install required UI dependencies.
- [x] Remove default dark-mode starter behavior.
- [x] Add light-mode-first design tokens.

## Phase 4 - Core Website
- [x] Build header and navigation.
- [x] Build proof-led hero with visual asset.
- [x] Build trust/social proof band.
- [x] Build value proposition section.
- [x] Build services overview.
- [x] Build case study preview section.
- [x] Build founder-led/about section without public personal details.
- [x] Build contact CTA and lead form.
- [x] Build footer.

## Phase 5 - SEO/AEO Content Silo
- [x] Create `/services`.
- [x] Create service detail routes.
- [x] Create `/case-studies`.
- [x] Create case study detail routes for VapeOS, Starry, Unicorn Island, and Regional Service Site.
- [x] Create `/insights` and a foundational article.
- [x] Add sitemap, metadata, robots, llms.txt, Open Graph metadata, and JSON-LD.
- [x] Add internal links between services, case studies, and insights.

## Phase 6 - Validation
- [x] Run `npm.cmd run lint`.
- [x] Run `npm.cmd run build`.
- [x] Run `npm.cmd audit --audit-level=high`.
- [x] Run public-file scan for personal identifiers.
- [x] Run visual desktop QA.
- [x] Run visual mobile QA.
- [x] Run accessibility and focus-state QA.
- [x] Record failures and fixes in `ISSUES.md`.

## Phase 7 - GitHub And Vercel
- [x] Attach app folder to GitHub repository.
- [x] Push completed website to `master`.
- [x] Link Vercel project to the GitHub repository.
- [x] Set production `NEXT_PUBLIC_SITE_URL`.
- [x] Deploy to Vercel production.
- [x] Verify live routes, sitemap, robots, and `llms.txt`.

## Phase 8 - Motion And Visual Polish
- [x] Add CSS-first scroll reveal system.
- [x] Add premium animated hero systems visual.
- [x] Add restrained glassmorphism surfaces.
- [x] Improve sticky header translucency.
- [x] Preserve reduced-motion behavior.
- [x] Validate desktop and mobile screenshots.
- [x] Push and deploy the motion enhancement pass.
