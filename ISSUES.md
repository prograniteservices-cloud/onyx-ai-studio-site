# Issues

## Open Issues

### ISSUE-013: Search Console Submission Is Manual
- Symptoms: Search Console ownership is verified, but sitemap submission and URL inspection cannot be completed from the current local wrapper.
- Root cause: The local Google wrapper supports Gmail, Drive, NotebookLM, Gemini image generation, and TTS, but does not expose Google Search Console commands.
- Current handling: Use the manual browser checklist in `GSC_INDEXING.md`.
- Verification needed: Confirm in Search Console that `https://onyxaistudio.digital/sitemap.xml` is submitted and priority URLs have been inspected/requested for indexing.

### ISSUE-005: Moderate PostCSS Advisory Through Next Dependency
- Symptoms: `npm.cmd audit --audit-level=high` exits successfully, but npm reports 2 moderate vulnerabilities for `postcss <8.5.10` through `next`.
- Root cause: The advisory is inside Next's dependency tree. After updating Next to `16.2.6`, the suggested `npm audit fix --force` path would still install `next@9.3.3`, which is a breaking downgrade and not acceptable.
- Current handling: Do not force-fix. Keep Next on `16.2.6` and re-check when a compatible Next/PostCSS patch is available.
- Verification: High-severity audit passes; moderate advisory remains visible in audit output.

### ISSUE-001: Codex Restart Needed For New Skill Auto-Discovery
- Symptoms: Newly installed skills are valid on disk, but this running Codex session cannot refresh the skill registry mid-turn.
- Root cause: Skill discovery happens at session startup.
- Current handling: Used installed `SKILL.md` files directly during this session.
- Verification needed: Restart Codex and confirm the new skill names appear in the available skills list.

## Resolved Issues

### ISSUE-017: Contact Form Open Issue Was Stale After SMTP Integration
- Symptoms: `ISSUES.md` still claimed the contact form used `mailto:` and had no backend endpoint.
- Root cause: The issue record was not moved after `/api/contact` and Infomaniak SMTP were integrated.
- Fix: Removed the stale open issue and documented the current AI Operations Review backend in `PFD.md`.
- Verification: Incomplete `POST /api/contact` returned HTTP 400 and the production build lists `/api/contact` as a dynamic route.

### ISSUE-016: Footer Logo Text Inherited Broad Span Styling
- Symptoms: Contact-page desktop screenshot showed the footer `Onyx` wordmark on an unintended light rectangle against the dark footer.
- Root cause: Footer LogoMark override used `[&_span:first-child]`, which matched nested text spans as well as the direct icon span.
- Fix: Changed the selector to `[&>span:first-child]` and made LogoMark text inherit current color.
- Verification: Re-captured `qa-repositioning-contact-desktop.png`; footer wordmark now renders cleanly on the dark footer.

### ISSUE-015: Sandbox Build Could Not Fetch Google Fonts
- Symptoms: Initial `npm.cmd run build` failed because `next/font` could not fetch Plus Jakarta Sans, Libre Baskerville, and Geist Mono from Google Fonts.
- Root cause: The sandbox blocked network access during the production build.
- Fix: Reran `npm.cmd run build` with approved network access for the build command.
- Verification: Production build passed and generated 25 pages.

### ISSUE-014: High-Severity Next Audit Findings On 16.2.4
- Symptoms: `npm.cmd audit --audit-level=high` failed with multiple high-severity advisories against `next@16.2.4`.
- Root cause: The project was pinned to a vulnerable Next patch version.
- Fix: Updated Next to `16.2.6` with `npm.cmd install next@16.2.6`.
- Verification: `npm.cmd audit --audit-level=high` exited 0. Moderate PostCSS advisory remains tracked in ISSUE-005.

### ISSUE-011: React Lint Rejected Synchronous State Update In Reveal Effect
- Symptoms: `npm.cmd run lint` failed with `react-hooks/set-state-in-effect` in `src/components/scroll-reveal.tsx`.
- Root cause: The reduced-motion branch called `setIsVisible(true)` directly inside `useEffect`.
- Fix: Removed the synchronous state update. Reduced-motion users keep visible content because the document never enables motion-ready hiding, and CSS also forces reveal content visible under `prefers-reduced-motion`.
- Verification: `npm.cmd run lint` passed.

### ISSUE-012: Animated Hero Visual Forced Desktop Grid Too Wide
- Symptoms: Desktop screenshot showed the hero visual overflowing left, squeezing the copy column, and pushing the hero content down.
- Root cause: The animated image's intrinsic width affected CSS grid min-content sizing.
- Fix: Added `min-w-0` to the hero grid items and visual wrapper, then constrained the image inside a fixed-aspect stage with object-fit.
- Verification: Re-captured `qa-motion-desktop.png`; the hero is framed correctly and the proof band remains visible in the first desktop viewport.

### ISSUE-008: Production Build Timed Out While Dev Processes Were Running
- Symptoms: `npm.cmd run build` timed out after three minutes with no useful output.
- Root cause: A stale local dev server and a leftover Vercel help process were still running in the app folder.
- Fix: Stopped the stale app-scoped Node and cmd processes, then reran the production build with a longer timeout.
- Verification: `npm.cmd run build` completed successfully and generated 19 static pages.

### ISSUE-009: New Local Git Repo Had No Author Identity
- Symptoms: `git commit` failed with "Author identity unknown".
- Root cause: The app folder had just been initialized as a Git repo and had no local `user.name` or `user.email`.
- Fix: Set repo-local Git config using the authenticated GitHub account and noreply email.
- Verification: Commit `ba9cce7` was created and pushed to GitHub.

### ISSUE-010: Vercel Scope Flag Rejected Personal Account
- Symptoms: `vercel link --scope prograniteservices-cloud` failed with "You cannot set your Personal Account as the scope."
- Root cause: Vercel treats the authenticated account as the default personal account, not a team scope.
- Fix: Linked with `vercel link --yes --project onyx-ai-studio-site` and let Vercel use the authenticated default account.
- Verification: Vercel linked `onyx-ai-studio-site`, connected the GitHub repository, and production deploys succeeded.

### ISSUE-003: shadcn Init Timeout
- Symptoms: `npx.cmd shadcn@latest init -d --base radix` timed out after 120 seconds and wrote only `components.json`.
- Root cause: CLI process hung before dependency/component installation completed.
- Fix: Installed required dependencies with `npm.cmd install` and added owned shadcn-compatible primitives manually.
- Verification: Pending lint/build.

### ISSUE-004: Skill Validator Rejected PowerShell UTF-8 BOM
- Symptoms: `quick_validate.py` reported missing frontmatter on normalized skills.
- Root cause: PowerShell `Set-Content -Encoding UTF8` wrote a BOM, while validator expects frontmatter at byte zero.
- Fix: Rewrote normalized `SKILL.md` files with Python UTF-8 no BOM.
- Verification: All 20 requested skills returned `Skill is valid!`.

### ISSUE-006: agent-browser CLI Not Available
- Symptoms: `agent-browser open http://127.0.0.1:3000` failed because `agent-browser` was not on PATH.
- Root cause: The Vercel browser automation CLI is not installed in this shell.
- Fix: Used `npx.cmd playwright screenshot` for desktop/mobile screenshots and `Invoke-WebRequest` for route checks.
- Verification: Desktop and mobile screenshots were generated, all planned routes returned HTTP 200, and the dev-server error log was empty after the final screenshot pass.

### ISSUE-007: Homepage Form Triggered Screenshot-Tool Hydration Warnings
- Symptoms: Dev server error log showed React hydration mismatch warnings where screenshot tooling injected `style={{caret-color:"transparent"}}` on form fields.
- Root cause: The Playwright screenshot CLI hides carets on inputs before hydration, which created a tool-induced mismatch while the homepage included a form.
- Fix: Moved the actual form to `/contact` only and replaced the homepage form slot with a CTA panel.
- Verification: Re-ran desktop/mobile screenshots after restarting the dev server; `dev-server.err` stayed empty.
