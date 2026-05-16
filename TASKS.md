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

## Phase 9 - Google Search Console Indexing
- [x] Confirm DNS/domain ownership is verified in Search Console.
- [x] Verify Vercel domain wiring for `onyxaistudio.digital`.
- [x] Verify `robots.txt`, `sitemap.xml`, and `llms.txt` return HTTP 200.
- [x] Verify sitemap URLs return HTTP 200.
- [x] Verify homepage canonical, Open Graph URL, JSON-LD, and no `noindex`.
- [x] Create `GSC_INDEXING.md` with exact browser submission steps.
- [ ] Submit `https://onyxaistudio.digital/sitemap.xml` in Search Console.
- [ ] Request indexing for priority URLs in Search Console.
- [ ] Re-check sitemap processing and Page Indexing after Google crawls.

## Phase 10 - VapeOS Outreach And Content
- [x] Create vape outreach research, batch, review, tracker, and Resend log artifacts.
- [x] Add outreach workflow and dry-run sender scripts with duplicate protection.
- [x] Add automated tests for outreach validation, review generation, dry-run email construction, and duplicate handling.
- [x] Add VapeOS-focused insight article for messy vape-shop catalogs.
- [x] Update VapeOS case study positioning as a retail inventory demo.
- [x] Run dry-run sender inspection for batch 01.
- [x] Patch Next from `16.2.4` to `16.2.6` to clear high-severity audit findings.
- [ ] Research remaining South Carolina shops to reach 25 approved email-ready prospects.
- [ ] Confirm compliant physical mailing address before any live send.
- [ ] Send the first vape batch with a small limit, such as 5, then inspect log/tracker.
- [ ] Send Day 2 estimate-tool demo follow-up when due.
- [ ] Mark Vape2.0 owner-son thread dormant after two weeks of no response and send one final close-the-loop message if useful.

## Phase 11 - AI Business Operations Repositioning
- [x] Read `Site_Repositioning_Prompt.txt` and `AI_Business_Integration_System.txt`.
- [x] Reposition homepage around AI Business Operations Integration.
- [x] Update navigation to AI Business System, Reception + Web Assistant, Internal Assistant, Portfolio, Insights, Pricing, and Contact.
- [x] Preserve and reframe existing services as supporting parts of the flagship system.
- [x] Preserve and reframe existing portfolio projects as AI operations proof modules.
- [x] Preserve and reframe insights around AI operations, data handling, guardrails, and lead capture.
- [x] Add premium `/pricing` page with implementation, management, and separate usage-cost positioning.
- [x] Update contact page CTA to "Request an AI Operations Review".
- [x] Update contact form fields for business name, website, industry, locations, call volume, main problem, assistant scope, and notes.
- [x] Update `/api/contact` backend schema and required-field validation to match the new review form.
- [x] Update metadata, sitemap, `llms.txt`, PDD, PFD, README, DESIGN, and project state.
- [x] Run lint, typecheck, build, tests, audit, route checks, API validation, public identifier scan, and visual QA.
