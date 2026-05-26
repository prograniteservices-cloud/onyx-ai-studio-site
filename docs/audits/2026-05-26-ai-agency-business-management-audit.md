# AI Agency Business Management Audit - Onyx AI Studio

Compiled: 2026-05-26
Target site: https://onyxaistudio.digital
Target repo: `C:\Users\heath\Desktop\Projects\seo-presence-hub\onyx-ai-studio-site`
Auditor: AI agency business management agent

## Executive Scorecard

Business readiness score: **72/100**

Onyx AI Studio is credible enough to sell from now, especially for consultative AI operations reviews. The positioning, pricing ranges, proof library, lead form, and outreach machinery are stronger than most early AI agencies. The main gap is not the website itself; it is the missing visible operating system after a lead arrives: qualification, follow-up ownership, CRM status, sales pipeline, delivery SOPs, and repeatable niche-specific sales motion.

| Area | Score | Notes |
| --- | ---: | --- |
| Offer architecture | 78 | Clear flagship offer: AI Business Operations Integration. Needs sharper front-door review/package definition. |
| Niche focus | 58 | Website is broadly service-business focused while outreach spans vape, pool/spa, granite/countertops. Needs one active beachhead. |
| Lead capture | 78 | Strong form fields, Supabase persistence, and Resend notification. Missing CRM workflow and SLA layer. |
| Sales funnel | 63 | Good CTA and pricing page, but weak post-submit, booking, nurture, and campaign-specific journey. |
| Proof assets | 75 | 20 demos, case studies, process graphic, insights. Needs stronger real-world outcomes and testimonials. |
| Pricing/package signals | 82 | Premium ranges are public and framed correctly. Needs review deliverable/timeline/scope clarity. |
| Operational readiness | 66 | Good docs/tests/scripts. Delivery playbooks and lead management are underdeveloped. |
| Outreach alignment | 72 | Strong research/send tooling and campaign discipline. Needs tighter niche-to-offer alignment. |
| Authority building | 68 | SEO/GEO foundation is good; external entity footprint and founder authority need more work. |
| Delivery risk | 64 | Ambitious Retell/Supabase/assistant promise needs visible delivery SOPs, privacy rules, and pilot proof. |

## Strengths

- **The business has a real strategic position.** Onyx is not presenting as a generic chatbot agency; the site and wiki consistently frame the offer as managed AI operations integration across reception, website assistance, lead capture, scheduling, company knowledge, data, and internal employee support.
- **Pricing is appropriately premium.** The live pricing page exposes setup ranges of $4,000-$10,000+ plus $750-$1,500+/month management, with client-paid platform usage separated. That supports serious buyer qualification.
- **Lead capture is operational, not decorative.** The contact form collects useful qualification fields like business name, industry, locations, call volume, main problem, assistant scope, and notes. The backend saves leads to Supabase and sends a Resend notification.
- **Proof surface is unusually deep for an early agency.** The site links to 20 SaaS demos, multiple case studies, a Countertop Estimate Tool, VapeOS, process visuals, and practical insights. This gives sales conversations tangible material.
- **Outreach process has discipline.** The repo includes niche research artifacts, trackers, duplicate handling, dry-run/send scripts, tests, and compliance checks. The wiki records multiple VapeOS batches and a pool/spa campaign pipeline.
- **The business avoids dangerous AI hype.** Copy repeatedly distinguishes public assistants from internal assistants, mentions guardrails, and avoids staff-replacement claims.

## Weaknesses And Operational Risks

1. **Critical: No complete lead-to-sale operating system is visible.**
   Supabase stores contact leads with `status = new`, and email notifications fire, but there is no visible CRM view, lead score, owner, next action, SLA, meeting booking, proposal stage, follow-up cadence, or closed-won/lost tracking. This is the highest operational risk because paid revenue depends on disciplined follow-up after the form or outreach reply.

2. **High: Niche focus is still too broad for first revenue.**
   The site sells broadly to `service companies`, while active proof/outreach spans granite/countertops, vape shops, pool/spa, irrigation, and generic SaaS demos. That breadth is useful long-term, but early sales need one beachhead narrative. Granite/countertops has the strongest founder credibility; pool/spa has the highest scored current campaign. Running both without a single priority risks diluted messaging.

3. **High: The AI Operations Review is positioned well but not packaged tightly enough.**
   The CTA is strong, but the buyer does not yet see whether the review is free or paid, how long it takes, what they receive, what inputs are required, what happens after submission, and what disqualifies a project. This weakens conversion and sales control.

4. **High: Proof is demo-heavy, not outcome-heavy.**
   The demos show capability, but case studies need more buyer-grade proof: before/after workflow maps, screenshots of delivered systems, anonymized lead records, testimonials, implementation timelines, measurable operational improvements, and founder/client commentary.

5. **Medium-high: Delivery promise is broader than the visible delivery system.**
   The offer mentions Retell, Supabase, phone reception, website assistants, internal assistants, CRM/calendar/email/SMS integrations, reporting, and guardrails. The repo proves the website/contact/backend layer well, but there is not enough visible delivery documentation for client onboarding, Retell setup, knowledge ingestion, privacy/retention, testing, launch, monitoring, and monthly optimization.

6. **Medium: Authority building is structurally started but externally thin.**
   The site has schema, `llms.txt`, insights, sitemap, and founder schema, but the external entity footprint and recent indexing history remain weak.

7. **Medium: Outreach compliance and sender identity need continuous control.**
   The sender script has compliance gates and refuses live send without a physical mailing address env var, which is good. Campaign execution should continue to treat physical address, unsubscribe handling, bounce tracking, and reply routing as operational controls, not one-time setup.

8. **Low-medium: Docs/state drift is a management risk.**
   Some project state and decisions are stale relative to current implementation, such as older mail/contact assumptions. That does not hurt the live site directly, but it can cause agents or operators to make wrong decisions later.

## Priority Recommendations

1. **Build the lead management layer next.**
   Add a simple internal lead pipeline around `onyx_contact_leads`: status, score, source, campaign, next action, due date, notes, owner, contacted_at, booked_at, proposal status, and closed outcome. Even a protected admin table/view plus SOP is enough for now.

2. **Choose one 30-day beachhead.**
   Recommendation: finish the granite/countertop follow-up lane first because founder credibility and the Countertop Estimate Tool are strongest. If pool/spa is chosen instead, create one pool/spa-specific landing path and pause new vape/granite expansion until replies are processed.

3. **Package the AI Operations Review.**
   Define price/free status, 30-45 minute call or async review, required inputs, deliverable, turnaround time, sample output, next-step proposal path, and not-a-fit criteria.

4. **Create a proof ladder.**
   Add one strong proof page per priority niche: problem, workflow before/after, demo, implementation map, expected ROI logic, screenshots, and a clear `what Onyx would build first` recommendation.

5. **Write the delivery operating system.**
   Create SOPs for discovery, data intake, Retell setup, Supabase schema, guardrails, test scripts, launch checklist, monitoring, monthly optimization, privacy/retention, and offboarding.

6. **Align outreach to landing pages.**
   Each campaign should point to a matching proof page or review page. Outreach should not send a generic buyer into a broad agency site unless the email already did the niche framing.

7. **Upgrade founder authority surfaces.**
   Complete LinkedIn repositioning, publish founder-led posts tied to demos, and use Google Business Profile/process assets once reviewed.

## Evidence Gathered

- Live homepage, pricing, contact, portfolio, and case-study pages confirm the flagship AI operations positioning, premium pricing, review CTA, proof assets, and form fields.
- Wiki strategy and project pages confirm the intended flagship offer, pricing model, CTA, outreach state, Supabase lead persistence, SEO/GEO status, and pool/spa planning.
- Lead form fields are implemented in `src/components/contact-form.tsx`.
- Contact backend saves leads and sends notifications in `src/app/api/contact/route.ts`.
- Supabase lead table includes status but no full pipeline fields yet in `supabase/onyx_contact_leads.sql`.
- Outreach sender includes duplicate/compliance/send controls in `scripts/outreach_sender.mjs`.

No files were edited by the audit agent, and no raw secrets were inspected.
