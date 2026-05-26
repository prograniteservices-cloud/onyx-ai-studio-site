# Four-Agent Strategy And Recommendation Paper - Onyx AI Studio

Compiled: 2026-05-26
Target site: https://onyxaistudio.digital
Target repo: `C:\Users\heath\Desktop\Projects\seo-presence-hub\onyx-ai-studio-site`

## Method

Four agents audited the site and business from separate lenses:

1. Frontend engineering.
2. UI/UX and visual design.
3. SEO, GEO/agentic search, and marketing.
4. AI agency business management.

After the initial audits, each agent reviewed the other three findings and returned roundtable input. This paper synthesizes the consensus, disagreements, strengths, weaknesses, and recommended strategy.

## Executive Summary

Onyx AI Studio is not broken. The site is technically credible, visually controlled, and strategically sharper than most early AI agency websites. It has a clear flagship direction, public pricing, working lead capture, Supabase/Resend persistence, strong technical SEO foundations, `llms.txt`, schema, a portfolio library, case studies, and outreach discipline.

The problem is that the site and business are not yet hardened into a focused revenue machine. The weak points are conversion path friction, proof depth, mobile CTA access, performance drag from nonessential animation, broad niche positioning, and the missing lead-to-sale operating layer after a visitor or outreach prospect raises a hand.

The recommended strategy is **not a full redesign**. It is a 90-day execution plan around four moves:

1. Package the **AI Operations Review** as the primary front-door offer.
2. Fix conversion blockers and trim performance drag.
3. Turn proof from demo-heavy to outcome-heavy.
4. Build the lead-to-sale operating system behind the website.

## Consensus Strengths

### The Technical Foundation Is Strong

The frontend and SEO agents agreed that the site has a healthy technical base:

- Next.js App Router structure is solid.
- Marketing pages are mostly static/SSG.
- Lint, TypeScript, tests, and build passed during audit checks.
- Sitemap, robots, metadata, canonical tags, and structured data are in place.
- `/llms.txt` exists and gives AI crawlers a useful page map.
- Live sitemap URLs returned 200, self-canonical, indexable responses.

This matters because the highest-value work is no longer "make the site crawlable." The crawl/index foundation is mostly there. The next work is making the site more useful, trustworthy, fast, and conversion-ready.

### The Brand Position Is Better Than Generic AI Agency Copy

All agents agreed that "AI Business Operations Integration" is a real strategic position. The site does not look like a random chatbot reseller. It frames AI around calls, website visitors, lead capture, scheduling, company knowledge, business data, internal support, and guardrails.

That is a defensible direction for premium AI implementation.

### Pricing Is Stronger Than Typical Agency Positioning

The public setup and monthly management ranges are useful. They qualify buyers and signal that Onyx sells managed implementation, not a cheap widget. The site also correctly separates client-paid platform usage from Onyx implementation/management fees.

### Proof Exists, But Needs Better Hierarchy

The portfolio, case studies, process graphic, Countertop Estimate Tool, VapeOS, and insights give the business more proof than many early agencies. The issue is not proof absence. The issue is proof framing.

The buyer should see:

- What operational problem existed.
- What system Onyx built.
- What changed in the workflow.
- What inputs and outputs look like.
- Why the proof applies to their business.

Right now, too much proof reads as demo breadth instead of business outcome.

### Lead Capture Exists

The contact form and backend persistence are real. Leads are saved to Supabase and notifications are sent through Resend. This is a real asset.

The gap is everything after capture: status, owner, next action, due date, review scheduling, proposal stage, follow-up cadence, and close/loss tracking.

## Consensus Weaknesses

### 1. The Lead-To-Sale Operating System Is Missing

This is the biggest business risk. Onyx sells operational integration, so its own lead pipeline needs to demonstrate operational discipline.

Current state:

- A lead can be captured.
- A notification can be sent.
- The lead can be stored.

Missing state:

- Lead source and campaign attribution.
- Qualification score.
- Pipeline status.
- Owner.
- Next action.
- Due date.
- Contacted/booked/proposal/closed timestamps.
- Follow-up SLA.
- Review-call workflow.
- Proposal workflow.
- Reporting on booked calls, proposal rate, close rate, and source quality.

The business-management agent ranked this above almost every website concern because revenue depends on follow-up discipline.

### 2. The AI Operations Review Is Not Yet Packaged Enough

The CTA is directionally right, but the buyer needs a more concrete productized diagnostic:

- Is it free, paid, or credited toward implementation?
- Is it a 30-45 minute call, async review, or both?
- What does the buyer submit?
- What does Onyx review?
- What output does the buyer receive?
- How fast is turnaround?
- What counts as a good fit or bad fit?
- What happens after the review?

Without those details, the form feels like a contact form. With those details, it becomes a premium front-door offer.

### 3. Mobile Conversion Path Is Underbuilt

The UI/UX and frontend agents both flagged mobile navigation. Pricing and Contact can hide offscreen behind horizontal scrolling, and there is no persistent mobile Review CTA.

For a premium service, this is revenue friction. A buyer checking the site quickly on a phone should always be able to find:

- Pricing.
- Proof.
- Contact/review request.

### 4. The Contact Form Is Too Heavy For First Conversion

The current form is useful for qualification but asks too much before enough trust is earned. The better pattern is staged qualification:

- First step: name, email, business, website, main problem, notes.
- Second step after submission or scheduling: call volume, locations, assistant scope, data/docs, scheduling rules, tools, risk areas.

The full intake should not disappear, but it should move later in the process.

### 5. Proof Is Demo-Heavy, Not Outcome-Heavy

The portfolio breadth is valuable, but it can dilute the core offer if it leads the story. The strongest proof path should promote only the demos and case studies that map directly to AI operations outcomes:

- Missed-call handling.
- Website lead capture.
- Quote/intake workflow.
- Internal knowledge search.
- Messy data cleanup.
- Follow-up workflow.

The rest of the demo library should remain secondary.

### 6. Performance Is A Brand Issue

The frontend audit found:

- Homepage about 676 KB decoded JS.
- `/services` about 758 KB decoded JS.
- Framer Motion used for mostly decorative service-page visuals.
- A dead `BEGIN SYNTHESIS` visual button.
- Many `ScrollReveal` client islands on static marketing content.

The SEO audit also flagged large assets, including the raw process infographic. A premium AI implementation site should feel fast and controlled. This is not only an engineering concern; it affects trust.

### 7. External Authority And Entity Signals Are Thin

The site has schema and founder markup, but external entity footprint is still weak. Searches can surface unrelated Onyx/Onyx AI entities. The fix is not generic backlink chasing. The fix is consistent entity building:

- Founder LinkedIn.
- LinkedIn company page if available.
- Google Business Profile/process assets if appropriate.
- Selective third-party mentions.
- Partner/client mentions.
- Clear About/Founder page.
- Consistent naming and sameAs links.

## Roundtable Disagreements And Cautions

### Do Not Treat GSC 0 Indexed As A Site Emergency

The SEO agent flagged GSC sitemap indexed count as a monitoring risk, but every agent cautioned against overreacting. Live crawlability is strong, URL Inspection requests were submitted recently, and GSC data can lag for young sites. Keep monitoring, but prioritize content depth, proof, internal links, and external entity building.

### Do Not Flatten The Visual Identity For Performance

The design system is a strength. The right move is to remove expensive nonessential client JavaScript and dead UI, not make the site bland. Keep the editorial systems identity; make it lighter and more conversion-focused.

### Do Not Delete Portfolio Breadth

The portfolio breadth is useful. The problem is hierarchy. Lead with 3-5 commercially relevant proof paths, then keep the 20 demos as secondary capability evidence.

### Do Not Overbuild CRM Before Defining The Review Offer

The pipeline matters, but the review must be defined first. The system should know what a qualified AI Operations Review lead means before adding too much pipeline machinery.

## Recommended Strategic Position

Onyx should present as:

> Onyx AI Studio builds managed AI business operations systems for service businesses that need better call handling, website lead capture, scheduling support, internal knowledge search, structured business data, and safe guardrails.

The near-term front-door offer should be:

> AI Operations Review: a bounded diagnostic that maps calls, website leads, scheduling, documents, data, follow-up, and guardrail risks into a practical implementation recommendation.

The business should avoid leading with:

- Generic AI automation.
- Chatbots.
- A gallery of unrelated SaaS demos.
- Too many verticals at once.
- Pure technical platform language.

## Recommended 30-Day Plan

Focus: conversion, proof, and sales-system basics.

1. **Package the AI Operations Review.**
   - Define free/paid/credited model.
   - Define deliverable, timeline, required inputs, fit criteria, and next steps.
   - Add "what happens after you submit" near the CTA.

2. **Fix mobile conversion.**
   - Make Pricing and Contact/Review always reachable.
   - Replace or supplement horizontal mobile nav with a compact menu and visible CTA.
   - Add active page state if practical.

3. **Simplify the first-step form.**
   - Required: name, email, business, website, main problem, notes.
   - Optional or second-step: call volume, locations, assistant scope, deeper operational fields.
   - Add `aria-live`, status roles, focus handling, and clearer submit states.

4. **Create the minimum lead pipeline.**
   - Add lead status, source/campaign, score, owner, next action, due date, notes, contacted_at, booked_at, proposal_at, closed outcome.
   - Define speed-to-lead SLA and follow-up cadence.
   - Write a short lead-handling SOP.

5. **Trim obvious performance and UX debt.**
   - Remove dead `BEGIN SYNTHESIS` button.
   - Replace `/services` Framer Motion visual with CSS/server-rendered markup.
   - Reduce homepage `ScrollReveal` client boundaries.
   - Add skip link and fix separator/logo accessible-name issues.
   - Optimize the process infographic asset.

6. **Choose one beachhead for 30 days.**
   - Recommended first choice: granite/countertops, because founder credibility and the Countertop Estimate Tool are strongest.
   - Alternative: pool/spa, if current research quality and outreach timing make it the more active campaign.
   - Do not run every niche equally during this sprint.

## Recommended 60-Day Plan

Focus: proof depth, niche landing paths, and authority.

1. **Build one flagship proof page for the selected beachhead.**
   - Problem.
   - Before workflow.
   - System Onyx would build.
   - Screenshots or mock artifacts.
   - Example lead summary or quote-intake record.
   - Implementation map.
   - Expected operational value.
   - Founder narrative.

2. **Expand priority service and proof pages.**
   - `/services/ai-integration`
   - `/services/reception-web-assistant`
   - `/services/internal-business-assistant`
   - `/insights/what-is-ai-operations-review`
   - `/case-studies/countertop-estimator`
   - `/case-studies/vapeos`

3. **Create 2-3 focused landing pages or proof paths.**
   - AI receptionist and lead capture for service businesses.
   - Website quote/intake tools.
   - Internal knowledge/data assistant for messy operations.

4. **Add authority surfaces.**
   - About/Founder page.
   - Founder bio blocks on articles.
   - LinkedIn company/founder alignment.
   - SameAs links where appropriate.
   - Source-backed passages for platform claims.

5. **Add browser/a11y regression checks.**
   - Homepage.
   - Services.
   - Pricing.
   - Contact.
   - One service detail page.
   - One proof/case-study page.

6. **Run one disciplined campaign.**
   - Landing path.
   - Outreach copy.
   - Review intake.
   - Follow-up sequence.
   - Reply tracking.
   - Objection log.
   - Booked-call and proposal tracking.

## Recommended 90-Day Plan

Focus: revenue operations and external authority.

1. **Convert the first client or pilot into formal proof.**
   - Testimonial if available.
   - Before/after workflow.
   - Screenshots or anonymized artifacts.
   - Measurable outcome or operational improvement.

2. **Productize delivery SOPs.**
   - Discovery.
   - Data intake.
   - Retell/assistant setup.
   - Supabase/data layer.
   - Guardrails.
   - Testing.
   - Launch.
   - Monitoring.
   - Monthly optimization.
   - Offboarding.

3. **Build CRM/reporting visibility.**
   - Lead source.
   - Conversion rate.
   - Booked calls.
   - Proposal value.
   - Close rate.
   - Time to first response.

4. **Expand only after the first lane produces data.**
   - Add a second niche after the first lane has reply/conversion data.
   - Do not use all verticals as equal front-page proof.

5. **Build external authority.**
   - Founder LinkedIn posts.
   - Google Business Profile assets if appropriate.
   - Partner/client mentions.
   - Selective directories.
   - Niche-specific proof links.
   - Original teardown/data content that AI systems can cite.

## Priority Backlog

| Priority | Work Item | Why It Matters |
| --- | --- | --- |
| P0 | Define AI Operations Review package | Turns the CTA into a sellable diagnostic. |
| P0 | Add lead pipeline fields/SOP | Prevents lost leads and proves operational maturity. |
| P0 | Fix mobile nav/CTA | Removes conversion friction on high-intent mobile visits. |
| P0 | Add form `aria-live` and focus handling | Improves accessibility and trust on the main conversion event. |
| P1 | Remove `/services` Framer/dead CTA | Reduces JS weight and removes confusing UI. |
| P1 | Simplify first-step contact form | Captures more cold interest without losing qualification. |
| P1 | Create one outcome-heavy proof page | Upgrades sales trust from demos to business evidence. |
| P1 | Choose 30-day beachhead | Prevents diluted outreach and messaging. |
| P2 | Add About/Founder page | Strengthens entity and E-E-A-T signals. |
| P2 | Expand core service pages | Improves buyer education, SEO, and GEO citation depth. |
| P2 | Add browser/a11y tests | Prevents regression in the primary sales flow. |
| P3 | Split `site-data.ts` as content grows | Reduces maintainability and bundle-risk debt. |

## Success Metrics

Track these weekly once the first 30-day fixes are live:

- Indexed priority pages in GSC.
- Impressions for branded and non-branded terms.
- Clicks and CTR for service/review pages.
- Contact form starts and completions.
- Quick-fit CTA submissions if added.
- Time to first response.
- Review calls booked.
- Proposals sent.
- Close rate.
- Source/campaign quality.
- Page performance for homepage, services, and contact.

## Final Recommendation

Onyx should not spend the next sprint chasing a full redesign or generic SEO checklist. The site already has a good foundation. The professional move is to close the revenue loop:

1. Make the AI Operations Review feel like a real diagnostic product.
2. Make the mobile and form path easier to complete.
3. Turn proof into business outcomes.
4. Pick one beachhead and run it with discipline.
5. Build the internal lead pipeline so every inquiry has an owner, status, next action, and follow-up SLA.

That turns the current site from a credible AI agency brochure into a working acquisition and sales system.
