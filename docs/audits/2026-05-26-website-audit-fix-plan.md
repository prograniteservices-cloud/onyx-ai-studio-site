# Website Audit Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the accepted Website Audit findings into a focused sales-system improvement sprint for Onyx AI Studio.

**Architecture:** Keep the current Next.js App Router site and visual identity. Improve the buyer path through content/data updates, a stronger Review package, a granite/countertop proof path, operator-visible lead pipeline work, and targeted frontend hardening.

**Tech Stack:** Next.js App Router, React, TypeScript, Supabase REST, Resend, Node test runner, ESLint, Vercel.

---

## Locked Decisions

- The broad portfolio is not a weakness. Keep all 20 demos visible because buyers may already know the kind of system they want and need proof Onyx can build it.
- Do not add ROI math, ROI calculators, or ROI claims as a site requirement. Use workflow proof, sample records, screenshots, timelines, and implementation boundaries instead.
- Do not redesign the brand. Keep the current premium operational identity and reduce friction around it.
- Do not expose raw credentials. Supabase secret usage must remain server-only.

## Task 1: Productize The AI Operations Review

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/lib/site-data.ts`
- Test: `tests/client_facing_copy.test.mjs`

- [ ] **Step 1: Add a failing copy test**

Add assertions that the public site source includes these exact buyer-facing concepts:

```txt
reviewed within one business day
workflow map
first-system recommendation
source-material checklist
30-45 minute review call
not sold or added to bulk outreach
```

Also assert that the reviewed files do not contain `ROI calculator`, `return on investment calculator`, or `guaranteed ROI`.

- [ ] **Step 2: Run the targeted test and confirm failure**

Run:

```powershell
npm.cmd test -- tests/client_facing_copy.test.mjs
```

Expected: fail because the new Review-package phrases are not yet present everywhere.

- [ ] **Step 3: Add the Review package to public surfaces**

Add a compact "What you get after the Review" block to `/contact`, the homepage CTA area, and the AI Operations Review insight data. The copy must state:

- Submission is reviewed within one business day.
- Buyer receives a workflow map, first-system recommendation, and source-material checklist.
- Strong-fit projects move to a 30-45 minute review call or async workflow review.
- The submission is used to evaluate fit and plan the next step; it is not sold or added to bulk outreach.
- Not-fit projects receive a practical cleanup/readiness next step instead of a forced build pitch.

- [ ] **Step 4: Re-run the targeted test**

Run:

```powershell
npm.cmd test -- tests/client_facing_copy.test.mjs
```

Expected: pass.

## Task 2: Build The Granite/Countertop Proof Path

**Files:**
- Modify: `src/lib/site-data.ts`
- Modify: `src/app/case-studies/[slug]/page.tsx` only if the existing renderer cannot display the needed fields cleanly
- Modify: `public/llms.txt`
- Test: `tests/seo_indexing.test.mjs`
- Test: `tests/client_facing_copy.test.mjs`

- [ ] **Step 1: Add failing content checks**

Add checks that the Countertop Estimate Tool case study or related indexed content includes:

```txt
sample lead record
material selection
square footage
edge detail
sink
backsplash
showroom readiness
before the first staff follow-up
```

Add checks that the same content does not require ROI claims.

- [ ] **Step 2: Run targeted tests and confirm failure**

Run:

```powershell
npm.cmd test -- tests/client_facing_copy.test.mjs tests/seo_indexing.test.mjs
```

Expected: fail until the proof-path copy and discovery references are updated.

- [ ] **Step 3: Add proof-path content**

Expand the countertop proof path with:

- A before/after workflow: vague inquiry before, structured quote-intake record after.
- A sample lead record outline: material, square footage, edge, sink, backsplash, timeline, showroom readiness, contact info, and notes.
- Implementation boundaries: what the tool collects, what staff still reviews, and when human follow-up happens.
- Direct CTA back to the AI Operations Review.

- [ ] **Step 4: Update AI/search discovery**

Ensure `public/llms.txt` names the countertop proof path as a quote-intake example and links it beside the Review page.

- [ ] **Step 5: Re-run targeted tests**

Run:

```powershell
npm.cmd test -- tests/client_facing_copy.test.mjs tests/seo_indexing.test.mjs
```

Expected: pass.

## Task 3: Preserve The Broad Portfolio And Add Better Signposts

**Files:**
- Modify: `src/app/portfolio/page.tsx`
- Modify: `src/lib/site-data.ts`
- Test: `tests/portfolio_hub_content.test.mjs`
- Test: `tests/client_facing_copy.test.mjs`

- [ ] **Step 1: Add failing portfolio intent checks**

Add tests that the portfolio keeps the 20-demo promise and includes buyer-intent signposts for:

```txt
lead capture
internal knowledge
document review
customer support
data analysis
guardrails
```

Also assert that the portfolio copy does not say the broad demo library is a weakness or distraction.

- [ ] **Step 2: Run the portfolio tests and confirm failure**

Run:

```powershell
npm.cmd test -- tests/portfolio_hub_content.test.mjs tests/client_facing_copy.test.mjs
```

Expected: fail until the signpost copy is added.

- [ ] **Step 3: Add portfolio signposting**

Keep the full demo library visible. Add a short "Find the kind of build you need" section that maps buyer intents to relevant demo categories. Do not hide demos behind filters for this sprint unless the existing page already has a simple pattern for it.

- [ ] **Step 4: Re-run the portfolio tests**

Run:

```powershell
npm.cmd test -- tests/portfolio_hub_content.test.mjs tests/client_facing_copy.test.mjs
```

Expected: pass.

## Task 4: Make The Lead Pipeline Operator-Visible

**Files:**
- Modify: `src/lib/contact-leads.ts`
- Create: `src/app/api/admin/leads/route.ts`
- Create: `src/app/admin/leads/page.tsx`
- Create: `src/middleware.ts` or the Next.js 16 equivalent if the repo already uses that convention
- Test: `tests/contact_leads.test.mjs`

- [ ] **Step 1: Add failing lead-list tests**

Add tests for a `listContactLeads` helper that:

- Uses `SUPABASE_REST_URL` or derives REST URL from `SUPABASE_URL`.
- Uses only `SUPABASE_SECRET_KEY`.
- Requests the fields needed for the operator view: id, created_at, business_name, name, email, website, main_problem, priority, pipeline_status, next_action, next_action_due_at, notification_status, lead_score, owner.
- Sorts by `next_action_due_at.asc`.
- Throws when Supabase credentials are missing.

- [ ] **Step 2: Run the lead tests and confirm failure**

Run:

```powershell
npm.cmd test -- tests/contact_leads.test.mjs
```

Expected: fail because `listContactLeads` does not exist yet.

- [ ] **Step 3: Implement lead listing**

Add `listContactLeads` to `src/lib/contact-leads.ts`. It must call the Supabase REST table with server-only secret headers and return normalized rows for the admin page.

- [ ] **Step 4: Add protected admin access**

Add a server-rendered `/admin/leads` page and `/api/admin/leads` endpoint. Protect both with Basic auth using server-only env vars:

```txt
ADMIN_DASHBOARD_USER
ADMIN_DASHBOARD_PASSWORD
```

If either env var is missing, return 404 for admin routes so the dashboard cannot accidentally become public.

- [ ] **Step 5: Render the minimum pipeline view**

The page must show:

- Business name
- Contact name and email
- Website
- Main problem
- Priority
- Pipeline status
- Next action
- Next action due date
- Notification status
- Lead score
- Owner

No editing is required in this sprint. Read-only visibility is enough.

- [ ] **Step 6: Re-run lead tests**

Run:

```powershell
npm.cmd test -- tests/contact_leads.test.mjs
```

Expected: pass.

## Task 5: Harden Frontend Interaction And Performance Risk

**Files:**
- Modify: `src/components/site-header.tsx`
- Modify: `src/components/contact-form.tsx`
- Modify: `src/components/scroll-reveal.tsx`
- Modify: `src/components/scroll-reveal-hydrator.tsx`
- Test: add source checks to an existing Node test file or create `tests/frontend_interactions.test.mjs`

- [ ] **Step 1: Add failing source checks**

Add checks that:

- `site-header.tsx` handles the Escape key when the mobile menu is open.
- The menu button receives focus again after closing from Escape or link click.
- Required form labels visibly indicate required fields.
- Reduced-motion or no-JavaScript users still receive visible content from reveal wrappers.

- [ ] **Step 2: Run the targeted frontend tests and confirm failure**

Run:

```powershell
npm.cmd test -- tests/frontend_interactions.test.mjs
```

Expected: fail until interaction hardening is implemented.

- [ ] **Step 3: Implement interaction hardening**

Add a menu button ref, close helper, Escape key listener, and focus return to `site-header.tsx`. Add visible required markers to required form fields without changing validation requirements.

- [ ] **Step 4: Reduce reveal fragility**

Ensure reveal components render content visible by default when JavaScript is unavailable or reduced motion is active. Keep animation subtle and avoid adding new client dependencies.

- [ ] **Step 5: Re-run targeted frontend tests**

Run:

```powershell
npm.cmd test -- tests/frontend_interactions.test.mjs
```

Expected: pass.

## Task 6: Update Delivery SOPs And Documentation Drift

**Files:**
- Modify: `docs/business/LEAD_HANDLING_SOP.md`
- Modify: `docs/business/AI_OPERATIONS_REVIEW_PACKAGE.md`
- Modify: `PFD.md`
- Modify: `PROJECT_STATE.md`
- Modify: `TASKS.md`

- [ ] **Step 1: Align the Review package docs**

Document the same Review promise used on the public site: one-business-day review, workflow map, first-system recommendation, source-material checklist, fit/not-fit handling, and privacy posture.

- [ ] **Step 2: Fix contact-form requirement drift**

Update `PFD.md` so required first-step fields match the route: name, business name, email, website, main problem, and notes. Keep industry, locations, call volume, and assistant scope as optional qualifiers.

- [ ] **Step 3: Add operator cadence**

Add a weekly lead-pipeline review cadence to the lead SOP:

- Review all new leads.
- Assign/confirm owner.
- Update next action.
- Check overdue next actions.
- Mark contacted/booked/proposal/closed states as they happen.

- [ ] **Step 4: Update project state**

Record the sprint goal and validation commands in `PROJECT_STATE.md` and `TASKS.md`.

## Task 7: Final Validation, Wiki Update, And Commit

**Files:**
- Modify: `C:\Users\heath\Desktop\Agent-Memory\wiki\projects\Onyx-AI-Studio.md`
- Modify: project-memory task/session state

- [ ] **Step 1: Run full validation**

Run:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

Expected: all pass.

- [ ] **Step 2: Run targeted secret scan**

Run a targeted scan over changed repo docs/source and wiki pages for:

```txt
RESEND_API_KEY=
SUPABASE_SECRET_KEY=
SUPABASE_ACCESS_TOKEN=
SUPABASE_JWT_SECRET=
sb_secret_
sk_live_
rk_live_
```

Expected: no raw secret values.

- [ ] **Step 3: Update wiki and project memory**

Update the Onyx wiki page with a safe summary of completed fixes and the validation results. Update the project-memory task and session log.

- [ ] **Step 4: Commit**

Use a focused commit message:

```powershell
git add .
git commit -m "feat: tighten Onyx review sales path"
git push
```

Before committing, inspect `git status --short` and avoid staging unrelated user work if it is outside this sprint.

## Acceptance Criteria

- AI Operations Review is concrete on public conversion surfaces.
- Granite/countertop proof path explains the workflow and sample lead record without ROI claims.
- Portfolio remains broad and better maps buyer intent to demos.
- Lead pipeline has a protected read-only operator view.
- Mobile menu and form accessibility are hardened.
- Reveal behavior is less fragile.
- Docs match the actual form/API behavior.
- Tests, lint, and build pass.
- Wiki and project memory are updated without raw secrets.
