# Onyx AI Studio Backend Survey

Date: 2026-05-24

Scope:
- Main site: `C:\Users\heath\Desktop\Projects\seo-presence-hub\onyx-ai-studio-site`
- Portfolio demo backend: `C:\Users\heath\Desktop\Projects\seo-presence-hub\Portfolio`

This survey documents backend-adjacent architecture, API surfaces, environment variables by name only, external service dependencies, persistence behavior, and operational findings. It intentionally excludes raw secret values.

## Executive Summary

The Onyx AI Studio main site is a Next.js App Router marketing and lead-capture site. Its active backend surface is one contact endpoint, `POST /api/contact`, which receives the AI Operations Review form payload, saves the lead to Supabase, and sends an email notification through the Resend API. Earlier on 2026-05-24, the main site was email-only; this survey has been updated after lead persistence was added.

The Portfolio repo is a separate Next.js demo launcher with twenty live AI SaaS demos under `/apps/[slug]`. The demos share one backend API pattern, `POST /api/apps/[slug]`. Each request is validated, optionally redacted for sensitive demo categories, sent through a provider chain of Vertex AI, Gemini API, and deterministic fallback, then logged to a private per-demo Supabase/Postgres schema when database credentials are configured.

The main operational mismatch found during the survey was documentation drift: several docs and older state files still described Infomaniak SMTP, while the working route used Resend. That app-facing drift was cleaned up after the survey. Remaining Infomaniak references are historical mailbox/account notes unless a future backend explicitly reintroduces that provider.

## Main Onyx Site Backend

### Runtime Shape

The main site is a Next.js App Router application. Most routes are static or content/data-driven React pages. Dynamic content routes are generated from `src/lib/site-data.ts`:

- `src/app/services/[slug]/page.tsx` uses `generateStaticParams()` from the `services` array.
- `src/app/case-studies/[slug]/page.tsx` uses `generateStaticParams()` from the `caseStudies` array.
- `src/app/insights/[slug]/page.tsx` uses `generateStaticParams()` from the `insights` array.

Metadata and AI/search discovery surfaces are part of the backend-adjacent architecture:

- `src/app/layout.tsx` defines root `metadata`, title template, Open Graph, Twitter metadata, robots hints, Organization JSON-LD, and WebSite JSON-LD.
- Route pages export page-level `metadata` where appropriate.
- `src/components/json-ld.tsx` serializes structured data into `application/ld+json` script tags and escapes `<` characters.
- `src/app/sitemap.ts` generates `/sitemap.xml` from static routes plus service, case-study, and insight data.
- `src/app/robots.ts` generates `/robots.txt`, allows general crawlers and named AI/search bots, disallows `CCBot`, and references the sitemap.
- `public/llms.txt` is a static AI-crawler guide listing core pages, service pages, proof pages, insight pages, and the external demo launcher.

The canonical domain is centralized as `siteUrl` in `src/lib/site-data.ts`, derived from `NEXT_PUBLIC_SITE_URL` with fallback to the production domain.

### Contact Form Flow

Data flow:

1. Visitor submits `ContactForm` in `src/components/contact-form.tsx`.
2. The client component creates a `FormData` object, converts it to JSON, and posts it to `/api/contact`.
3. `src/app/api/contact/route.ts` handles `POST`.
4. The route normalizes fields with `asText()`, checks required fields, saves a row to Supabase table `public.onyx_contact_leads`, builds text and HTML email bodies, and calls Resend via `fetch("https://api.resend.com/emails")`.
5. Resend sends the notification email. The route returns `{ success: true }` if the Supabase insert and Resend call both succeed.

### Lead Payload

Accepted input keys:

| Form/API key | Required | Notes |
| --- | --- | --- |
| `name` | Yes | Sender/contact name. |
| `business-name` | Yes | Used in the email subject and email body. |
| `email` | Yes | Used as the Resend `reply_to` value. |
| `phone` | No | Included as optional lead detail. |
| `website` | No | Included as optional lead detail. |
| `industry` | Yes | Review context. |
| `locations` | Yes | Review context. |
| `call-volume` | Yes | Review context. |
| `main-problem` | Yes | Used in the email subject and review context. |
| `assistant-scope` | Yes | Review context. |
| `notes` | Yes | Review context. |

Validation is currently presence-based after trimming strings. The route does not perform server-side email format validation beyond the browser `type="email"` client input. Missing required fields return HTTP 400 with `{ error: "Missing required AI Operations Review fields" }`.

### Email Construction

The route builds a row list of lead fields, renders a plain-text body, renders an escaped HTML body, and sends a Resend payload containing:

- `from`: configured by environment, with a code fallback.
- `to`: configured by environment, with a code fallback.
- `reply_to`: the submitted lead email.
- `subject`: `AI Operations Review: {businessName} ({mainProblem})`.
- `text`: plain-text lead summary.
- `html`: HTML lead summary with escaped values.

If Resend rejects the call, the route throws an error including the Resend status and response text. The public response is a generic HTTP 500 with `{ error: "Failed to send email. Please try again later." }`.

### Main Site Environment Variables

Active runtime names:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `SUPABASE_URL`
- `SUPABASE_REST_URL`
- `SUPABASE_SECRET_KEY`

Historical or previously drifted names found during the survey:

- `INFOMANIAK_EMAIL`
- `INFOMANIAK_TOKEN`
- `INFOMANIAK_SMTP_HOST`
- `INFOMANIAK_SMTP_PORT`

Operational note: this survey originally found stale Infomaniak SMTP/Nodemailer references in `README.md`, `PFD.md`, older `PROJECT_STATE.md` entries, and package metadata. Those app-facing docs and unused dependencies were cleaned up after the survey. Historical Infomaniak account notes remain only as mailbox/account records.

### Main Site External Dependencies

- Vercel hosting for the Next.js site.
- Resend API for contact form delivery.
- External Portfolio demo launcher at `https://onyx-portfolio-demos.vercel.app/apps`.
- External Countertop Estimate Tool link from the case-study data.
- Public assets under `public/`, including SVG proof visuals, Open Graph image references, `llms.txt`, and the generated process infographic already present in the repo.

## Portfolio Demo Backend

### Runtime Shape

The Portfolio repo is a separate Next.js application. It exposes:

- Demo index: `/apps`
- Twenty demo pages: `/apps/[slug]`
- Shared backend endpoint: `POST /api/apps/[slug]`

`lib/apps/catalog.ts` is the source of truth for each demo's:

- slug
- title and short title
- schema name
- API path
- input label and sample input
- max input character limit
- system prompt
- fallback response
- workflow/evidence/metrics metadata

`app/apps/[slug]/page.tsx` uses `generateStaticParams()` from the catalog so each demo route is generated from the same source of truth. `app/apps/page.tsx` renders the launcher from the catalog.

### Demo Slugs

The catalog defines these twenty slugs:

- `knowledge-base`
- `verified-qa`
- `support-chatbot`
- `task-manager`
- `secure-document-analyzer`
- `research-assistant`
- `content-creation`
- `data-fusion`
- `agent-simulator`
- `learning-tutor`
- `news-fact-checker`
- `recommendation-engine`
- `code-generation`
- `health-guardrails`
- `translation-agent`
- `portfolio-optimizer`
- `story-generator`
- `environmental-tracker`
- `bias-mitigation`
- `meeting-assistant`

### API Contract

Endpoint:

`POST /api/apps/[slug]`

Route file:

`app/api/apps/[slug]/route.ts`

Runtime settings:

- `runtime = "nodejs"`
- `dynamic = "force-dynamic"`

Request schema:

```json
{
  "input": "string",
  "forceProviderFailure": "optional boolean"
}
```

Validation behavior:

- Unknown slug returns HTTP 404 with `{ error: "Unknown app demo." }`.
- Invalid body returns HTTP 400 with `{ error: "Request body must include an input string." }`.
- Blank trimmed input returns HTTP 400 with `{ error: "Input is required." }`.
- Input longer than the app's catalog `maxInputChars` returns HTTP 413 with a demo-specific limit message.

Response shape:

```json
{
  "app": {
    "slug": "catalog slug",
    "title": "catalog title",
    "schema": "catalog schema"
  },
  "result": {
    "summary": "string",
    "answer": "string",
    "citations": ["string"],
    "actions": ["string"],
    "riskNotes": ["string"]
  },
  "meta": {
    "provider": "vertex | gemini | fallback",
    "usedFallback": "boolean",
    "providerError": "optional string",
    "persisted": "boolean",
    "persistenceNote": "string or null",
    "redactions": "number"
  }
}
```

### Redaction

The route applies `redactSensitiveText()` only to selected sensitive demos:

- `secure-document-analyzer`
- `research-assistant`
- `health-guardrails`
- `portfolio-optimizer`
- `meeting-assistant`

The redactor replaces likely email addresses, phone numbers, SSNs, and account/customer identifiers with labeled redaction tokens before provider calls and before storing `sanitized_input`. The original input is still stored as `input_text` when persistence is enabled, sliced to the catalog limit. For production sensitive-data handling, this is audit logging, not full data minimization.

### Provider Chain

`lib/server/ai.ts` attempts providers in order:

1. Vertex AI Gemini through Google Cloud auth.
2. Gemini API through configured API keys.
3. Deterministic catalog fallback.

Vertex provider:

- Reads `GOOGLE_CLOUD_PROJECT`.
- Reads `GOOGLE_CLOUD_LOCATION`, defaulting to `us-central1`.
- Reads `VERTEX_GEMINI_MODEL`, defaulting to `gemini-1.5-flash-002`.
- Uses `google-auth-library` and the Cloud Platform scope.
- In Vercel, requires `GOOGLE_APPLICATION_CREDENTIALS`; otherwise it skips with an explicit configuration error.

Gemini API provider:

- Reads a de-duplicated key list from `GEMINI_API_KEY`, `GEMINI_API_KEY_STUDIO`, `GEMINI_API_KEY_AIZA`, and `GEMINI_API_KEY_STARRY`.
- Reads `GEMINI_MODEL`, defaulting to `gemini-2.5-flash`.
- Iterates through configured keys before falling back.

Both live providers request strict JSON with keys:

- `summary`
- `answer`
- `citations`
- `actions`
- `riskNotes`

`safeParseResponse()` rejects unparseable or underspecified provider output and triggers the next fallback path.

### Persistence

`lib/server/supabase.ts` uses the `pg` package for server-side Postgres writes. It does not use the Supabase client for demo run persistence.

Database URL construction:

- Prefer `SUPABASE_DB_URL`.
- Otherwise derive a Postgres URL from `SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_URL` plus `SUPABASE_DB_PASSWORD`.
- For project ref `kqxbysmbnoejkflufnyj`, use the configured Supabase pooler host.
- If no database URL can be built, persistence returns `{ persisted: false, reason: "Supabase database credentials are not configured." }`.

Write behavior:

- Inserts into `{catalog schema}.runs`.
- Schema identifiers are validated against `/^[a-z][a-z0-9_]*$/` and quoted.
- Stored columns include `app_slug`, `input_text`, `sanitized_input`, `output`, `provider`, `status`, and `redaction_count`.
- If a database write fails, the API response still returns the model/fallback result with `persisted: false` and a persistence note.

Migrations:

- `supabase/migrations/202605150001_batch_one_saas_apps.sql` creates the first five app schemas and run tables.
- `supabase/migrations/20260516023713_live_demo_expansion.sql` creates the remaining fifteen app schemas and run tables.
- Each schema has a private `runs` table.
- RLS is enabled on each `runs` table.
- `service_role` receives schema usage and select/insert grants.
- Each table has a service-role policy for management access.

### Portfolio Environment Variables

Supabase/Postgres:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_DB_PASSWORD`
- `SUPABASE_DB_URL`

Google Cloud/Vertex:

- `GOOGLE_APPLICATION_CREDENTIALS`
- `GOOGLE_CLOUD_PROJECT`
- `GOOGLE_CLOUD_LOCATION`
- `VERTEX_GEMINI_MODEL`

Gemini API:

- `GEMINI_API_KEY`
- `GEMINI_API_KEY_STUDIO`
- `GEMINI_API_KEY_AIZA`
- `GEMINI_API_KEY_STARRY`
- `GEMINI_MODEL`

Note: `SUPABASE_SERVICE_ROLE_KEY` is documented in `.env.example`, but the inspected live demo persistence module writes through direct Postgres via `pg`. The migrations grant access to the database `service_role`; the route itself does not call a Supabase Data API client.

## Backend Maps

### Lead Capture Data Flow

```text
Browser ContactForm
  -> JSON POST /api/contact
  -> normalize and trim payload
  -> required-field validation
  -> Supabase REST insert into public.onyx_contact_leads
  -> build escaped text and HTML email bodies
  -> Resend /emails API
  -> email inbox notification
  -> JSON success/error response
```

Storage result: Supabase lead row plus email notification.

### Demo Run Data Flow

```text
Browser SaaS demo page
  -> POST /api/apps/[slug]
  -> slug lookup in lib/apps/catalog.ts
  -> Zod request validation
  -> input trim and max length check
  -> optional redaction for selected sensitive demos
  -> Vertex AI attempt
  -> Gemini API attempt
  -> deterministic fallback if providers fail
  -> optional Postgres insert into app_*.runs
  -> JSON result plus provider/persistence metadata
```

Storage result: run log only when Supabase/Postgres credentials are configured and the insert succeeds.

### External Service Dependency Map

```text
Main Onyx site
  -> Vercel: hosting/build/runtime
  -> Resend: contact email delivery
  -> External demo launcher: portfolio proof link
  -> External estimate tool: case-study proof link
  -> Public static assets: Open Graph, proof visuals, llms.txt

Portfolio demo backend
  -> Vercel: hosting/build/runtime
  -> Vertex AI: first live generation provider
  -> Gemini API: second live generation provider with key rotation
  -> Supabase/Postgres: optional server-side demo run logging
  -> Deterministic catalog fallback: no external dependency
```

### Storage And Persistence Map

```text
Main site lead capture
  ContactForm -> /api/contact -> Supabase REST insert -> Resend email
  Database: public.onyx_contact_leads
  Supabase runtime: server-side REST API using SUPABASE_SECRET_KEY

Portfolio demos
  /apps/[slug] -> /api/apps/[slug] -> provider response
  Optional database: private app_*.runs tables
  Supabase/Postgres runtime: pg Pool from SUPABASE_DB_URL or derived DB URL
```

## Findings

1. No raw secrets were included in this survey.
2. The main Onyx site now uses Supabase at runtime for server-side contact lead persistence.
3. The main lead capture path is database-backed and still sends Resend email notifications.
4. The active main contact route uses Resend. Older app-facing Infomaniak SMTP/Nodemailer references were identified by this survey and cleaned up afterward.
5. The Portfolio backend persists demo run logs only when Supabase/Postgres credentials are configured.
6. The Portfolio demo catalog is the single source of truth for slugs, schema names, API paths, prompts, fallback output, and input limits.
7. Portfolio RLS and service-role policies are present in migrations for all twenty per-demo schemas.
8. Selected sensitive demos perform server-side redaction before provider calls and store both original and sanitized input when persistence succeeds; production privacy expectations should be documented before accepting real confidential inputs.
9. NotebookLM auth must be checked before slide deck generation. If NotebookLM-py auth is expired or the unofficial API has changed, re-login or fallback handling is required.

## Source Files Reviewed

Main site:

- `package.json`
- `README.md`
- `PFD.md`
- `PROJECT_STATE.md`
- `public/llms.txt`
- `src/app/api/contact/route.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/components/contact-form.tsx`
- `src/components/json-ld.tsx`
- `src/lib/site-data.ts`

Portfolio:

- `.env.example`
- `package.json`
- `app/apps/page.tsx`
- `app/apps/[slug]/page.tsx`
- `app/api/apps/[slug]/route.ts`
- `lib/apps/catalog.ts`
- `lib/server/ai.ts`
- `lib/server/redaction.ts`
- `lib/server/supabase.ts`
- `scripts/validate-live-apps.mjs`
- `supabase/migrations/202605150001_batch_one_saas_apps.sql`
- `supabase/migrations/20260516023713_live_demo_expansion.sql`
