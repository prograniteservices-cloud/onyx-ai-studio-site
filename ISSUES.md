# Issues

## Open Issues

### ISSUE-005: Moderate PostCSS Advisory Through Next Dependency
- Symptoms: `npm.cmd audit --audit-level=high` exits successfully, but npm reports 2 moderate vulnerabilities for `postcss <8.5.10` through `next`.
- Root cause: The advisory is inside Next's dependency tree. The suggested `npm audit fix --force` path would install `next@9.3.3`, which is a breaking downgrade and not acceptable.
- Current handling: Do not force-fix. Keep Next on `16.2.4` and re-check when a compatible Next patch is available.
- Verification: High-severity audit passes; moderate advisory remains visible in audit output.

### ISSUE-001: Codex Restart Needed For New Skill Auto-Discovery
- Symptoms: Newly installed skills are valid on disk, but this running Codex session cannot refresh the skill registry mid-turn.
- Root cause: Skill discovery happens at session startup.
- Current handling: Used installed `SKILL.md` files directly during this session.
- Verification needed: Restart Codex and confirm the new skill names appear in the available skills list.

### ISSUE-002: Contact Form Has No Backend Endpoint
- Symptoms: Static form can open an email draft, but it does not submit to a server.
- Root cause: No approved email/domain/form backend exists in the app yet.
- Current handling: Use `mailto:hello@onyxaistudio.com` and document replacement path.
- Verification needed: Replace with a server action or form provider after the inbox is confirmed.

## Resolved Issues

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
