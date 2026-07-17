# Design System

## Design Direction
Name: Light Editorial Systems Studio

Purpose: persuade business buyers that Onyx AI Studio can turn messy operations into useful AI-powered systems.

Tone: editorial, professional, precise, and quietly technical.

Differentiation anchor: the site uses a visible "messy inputs -> operating system" diagram language, brass rule lines, and proof-led service cards instead of generic AI gradients.

## 2026-05-16 Repositioning Pass
The site is now centered on one premium flagship offer: **AI Business Operations Integration**.

- First-screen message: AI reception, lead capture, scheduling, website assistance, data handling, and internal business assistance built around real workflows and documents.
- Primary CTA: "Request an AI Operations Review".
- Secondary CTA: "View the System".
- Infrastructure framing: Retell powers voice and conversation handling; Supabase supports business data, lead records, summaries, documents, and knowledge access. Neither platform is positioned as the product.
- Portfolio framing: existing projects remain visible as AI operations modules and proof of data handling, assistant interface design, workflow automation, lead capture, guardrails, and custom implementation ability.
- Supporting service framing: web development is the front-end layer; SEO is demand generation and source material; automation moves leads, calls, summaries, appointments, and follow-up tasks through the business.
- Pricing framing: premium consultative ranges, not a checkout product. Implementation is $4,000-$10,000 and monthly management is $750-$1,500/month, with Retell and third-party usage paid directly by the client.
- Form framing: the contact page collects AI Operations Review fields tied to the backend schema: name, business name, website, industry, locations, call volume, main problem, assistant scope, and notes, plus contact details for reply.

Design stance: editorial operations console. Keep the light, professional, high-trust system, but let operational structure lead: strong system language, restrained premium pricing, dense but readable proof, and no hype-heavy AI language.

## 2026-05-16 Portfolio Hub Pass
Purpose: make the main site portfolio navigation client-facing by separating a broad demo hub from deeper case studies.

- `/portfolio` is the public hub for 20 live SaaS demos hosted by the separate portfolio deployment.
- `/case-studies` stays live for four deeper proof narratives and is linked from the hub and homepage.
- The homepage proof section now sends visitors to both demo breadth and case-study depth.
- Demo metadata is copied into `src/lib/site-data.ts` as lightweight public copy only; the website does not import or execute code from the portfolio demo repo at runtime.

Design stance: proof directory inside the existing editorial operations console. The page should feel like a dense, scannable capability catalog rather than a marketing splash page. Use restrained repeated cards, clear external-link affordances, and a top demo-launcher panel that makes the live deployment easy to find.

DFII:
- Aesthetic Impact: 4
- Context Fit: 5
- Implementation Feasibility: 5
- Performance Safety: 5
- Consistency Risk: 1
- DFII: 18 by raw inputs, treated as excellent with restraint.

## Skill Inputs
- `ui-ux-pro-max` query: `B2B agency automation web development professional real world businesses light editorial`
- Result adapted: Before-After Transformation landing structure, professional blue/neutral palette, strong contrast, proof before CTA.
- `frontend-design` DFII:
  - Aesthetic Impact: 4
  - Context Fit: 5
  - Implementation Feasibility: 5
  - Performance Safety: 5
  - Consistency Risk: 2
  - DFII: 17 by the requested formula inputs, capped as "excellent" for execution.
- `seo-plan`: agency architecture with services, case studies, insights, contact, schema, and E-E-A-T signals.
- `seo-geo` and `ai-seo`: SSR content, `llms.txt`, AI crawler access, extractable answer blocks, question headings, and JSON-LD.

## Palette
Use a neutral/stone base with multiple restrained accents so the site does not read as one-note.

| Token | Hex | Use |
| --- | --- | --- |
| Background | `#f7f4ee` | Page base |
| Foreground | `#17130f` | Main text |
| Card | `#fffdf8` | Repeated item surfaces |
| Muted | `#ece5d8` | Section bands and separators |
| Muted Foreground | `#665f55` | Secondary text |
| Primary | `#183a5a` | Main CTA and headings |
| Primary Foreground | `#fffdf8` | CTA text |
| Accent | `#0f7b75` | Active proof and links |
| Amber | `#b96924` | Diagram highlights and rule lines |
| Border | `#d8cdbd` | Thin editorial dividers |

## Typography
- Display: Libre Baskerville for editorial headlines and proof statements.
- Body: Plus Jakarta Sans for practical B2B readability.
- Mono: Geist Mono for metrics, IDs, and technical tags.
- No viewport-scaled font sizes. Responsive type uses Tailwind breakpoints only.

## Layout
- Light-mode-first.
- Sections are full-width bands or unframed constrained layouts.
- Cards are used only for repeated items and form surfaces.
- No cards inside cards.
- Header remains compact and sticky.
- Hero should show a hint of the next band on common mobile and desktop heights.

## Motion
- CSS-first.
- Use sparse opacity/translate entrance styles and hover color changes.
- Respect `prefers-reduced-motion`.
- No ornamental motion that competes with copy.

## Motion Enhancement Pass
Purpose: make the live site feel more premium without turning it into a decorative animation demo.

DFII:
- Aesthetic Impact: 5
- Context Fit: 5
- Implementation Feasibility: 5
- Performance Safety: 4
- Consistency Risk: 2
- DFII: 17 by raw inputs, treated as excellent with restraint.

Direction: "liquid editorial systems" inside the existing light editorial studio system. Use one memorable hero animation plus restrained scroll reveals and glass surfaces.

Approved effects:
- Hero system visual: subtle floating map, scanning sheen, small data-flow lines, and a horizontal workflow ticker.
- Section motion: IntersectionObserver reveal with opacity, blur, and short translate only.
- Surface depth: translucent `glass-panel` and `glass-card` treatments with thin borders and restrained shadows.
- Interaction: cards lift slightly on hover for pointer devices only.

Rules:
- All motion must honor `prefers-reduced-motion`.
- Continuous motion is allowed only in the hero visual and must stay slow, low-amplitude, and non-blocking.
- No scroll-jacking, parallax capture, bouncing icons, or heavy animation dependency.
- Keep glassmorphism subtle enough that text contrast remains strong.

## 2026-05-25 Technical SEO Pass
Purpose: make collection pages easier for Google and AI search systems to parse without changing the editorial operations console.

- Collection pages keep the same visual heading style, but the primary page heading renders as the only `h1`.
- Repeated section, card, and module headings remain `h2` or lower.
- Breadcrumb JSON-LD should appear on service, portfolio, case-study, insight, pricing, and contact routes.
- Decorative hero motion should stay CSS-first and low-cost; animation is acceptable only when it does not block the primary copy.

## 2026-05-26 Correction Sprint UI Pass
Purpose: keep the Light Editorial Systems Studio identity while removing conversion friction and decorative client-side weight.

- Mobile header uses a compact menu plus a visible Review CTA instead of horizontal-scroll navigation.
- Active navigation states should use `aria-current="page"` where the route matches.
- Contact form becomes staged: required first step is name, business, email, website, main problem, and notes; operational qualifiers are optional and secondary.
- Form status messages must use live regions and focus management so success, validation, and partial-success states are announced.
- `/services` keeps an editorial systems visual, but it is server-rendered/CSS-first and has no dead decorative button.
- Homepage reveal effects should be CSS/data-attribute enhanced from a single client island, with content visible before JavaScript and for reduced-motion users.

## 2026-06-01 Private AI Systems Pass
Purpose: add Right-Sized Private AI Systems as a major service chapter without pivoting away from AI Business Operations Integration.

- Navigation uses the concise label "Private AI Systems" and routes to `/services/private-ai-systems`.
- Homepage service promotion should include the new service by placing it in the first four service records.
- Public copy frames the work as choosing the smallest reliable AI system for the task, with local, private cloud, public cloud, or hybrid deployment selected by fit.
- The AI Operations Review remains the primary CTA, and copy should state that it includes a private AI fit check.
- Pricing language for private/local AI stays custom-scoped. Do not publish package ranges for hardware, local inference, or private infrastructure builds.
- A supporting insight at `/insights/private-ai-vs-cloud-ai-small-businesses` should answer the local/private/cloud/hybrid decision question for AI search and buyer education.
- Avoid overclaims: small models do not do everything, private AI does not replace all cloud AI, privacy and accuracy are not perfect, and cloud fallback may still be the practical choice.

## 2026-06-12 SC Smokes Authority Proof Pass
Purpose: add SC Smokes Directory as a public proof asset after the directory gained a real About/Methodology page and conservative verification language.

- `/case-studies/sc-smokes-directory` should read as local-directory, messy-data, and SEO-owner-funnel proof inside the existing editorial operations console.
- Use the same restrained case-study template and metrics language instead of a separate landing-page treatment.
- The visual anchor remains business-system proof: shop listings, city/category routes, category associations, verification labels, and owner correction paths.
- Public copy must avoid implying online sale, shipping, delivery, reservation, exact stock, or product legality for age-restricted products.
- Link outward to `https://scsmokes.com/about` as the live methodology/proof page.

## 2026-07-14 Lewis Asher Local-Growth Proof Pass
Purpose: add Lewis Asher Remodeling as reciprocal portfolio proof for an evidence-led local service launch without changing the established Light Editorial Systems Studio design.

- `/case-studies/lewis-asher-remodeling` uses the existing restrained case-study template and regional-service graphic.
- Place the record immediately after Greater Aiken Irrigation so the four-item footer proof list includes Lewis through the existing data order.
- The memorable anchor is factual transformation proof: nine public routes, four real before-and-after project transformations, and a 4.9 Google rating.
- Proof sections cover evidence-led presentation, small-job and local-search intent, mobile call/text conversion, and indexing readiness.
- The primary project action opens `https://lewisasherremodeling.com`; public copy must not claim rankings, leads, revenue, or unsupported business facts.
- Reuse existing typography, card structure, amber metric rule, spacing, and motion behavior so the new proof reads as part of the current system rather than a separate landing-page treatment.

## 2026-07-16 GraniteApp Editorial Product Proof
Purpose: lead the portfolio with real countertop-production software and refresh the existing estimator proof without leaving the established Light Editorial Systems Studio design.

- Direction: editorial product proof, DFII 15/15 (impact 5, fit 5, feasibility 4, performance 5, consistency risk 4).
- The differentiation anchor is real product evidence: a privacy-safe narrated workflow demo, real application screens, restrained brass rules, and literal operational copy instead of fabricated dashboard art.
- `/case-studies/graniteapp` leads the ordered case-study registry and proves shared job/piece records, six role-scoped stations, marking-to-full-job-QA handoff, issue/repair return, QA-gated load-out, and management visibility.
- The native video uses controls, inline playback, metadata preload, a real poster frame, burned-in captions, and a visible adjacent transcript. Audio never autoplays.
- `/case-studies/countertop-estimator` keeps its inbound-link slug but becomes GraniteApp Estimate Tool with a real current `/estimate` capture and verified 152-material, server-pricing, versioned-snapshot, structured-lead behavior.
- Reuse the existing serif/mono hierarchy, warm neutral palette, teal accent, amber metric rule, border language, and responsive grid. Video and transcript form one asymmetric proof spread rather than a generic centered media block.

## VapeOS Outreach Content Pass
Purpose: support a South Carolina-first vape-shop outreach campaign by making VapeOS read as a retail inventory search demo rather than a one-off private lead.

Direction: keep the same light editorial systems voice, but sharpen the retail proof around messy catalogs, inconsistent product naming, and staff/customer lookup speed.

Content rules:
- Do not mention unresponsive private leads or private source context.
- Describe VapeOS as a live demo and portfolio proof point.
- Link the new insight to AI integration, automation workflows, and the VapeOS case study.
- Keep vape-shop copy practical and inventory-focused, not lifestyle or nicotine-promotion focused.

## Image Direction
Primary visual assets are editorial SVGs that communicate the actual service model:
- `public/onyx-logo.svg`: simple wordmark and faceted onyx mark.
- `public/onyx-systems-map.svg`: messy inputs turning into a clear operating system.
- `public/case-study-vapeos.svg`: retail inventory/search interface abstraction.
- `public/case-study-starry.svg`: quiet ambient product abstraction.
- `public/case-study-unicorn-island.svg`: interactive learning/game system abstraction.
- `public/case-study-regional-service.svg`: content silo/local SEO abstraction.

Imagegen prompts saved for later raster exploration:
- Logo: "Minimal faceted black onyx mark for a professional AI development studio, editorial, high-trust, flat vector, no gradients, no text."
- Hero: "Light editorial B2B automation studio desk scene, paper workflows becoming clean software dashboard panels, brass and teal accents, sophisticated, real business operations."
- Supporting: "Abstract case study thumbnails for AI retail inventory search, ambient audio companion, interactive learning game, and regional SEO content architecture, consistent editorial style."

## Form CRO
Form Health & Friction Index target: 88/100.
- Required first step: name, business name, email, website, main problem, and notes.
- Optional qualifiers: phone, industry, locations, call volume, and assistant scope.
- Visible labels, 44px minimum targets, status live region, and focusable response message.
- Partial success copy must tell the visitor the lead was saved and not to resubmit.
- Trust copy near submit: "No spam. You will get a practical next-step reply."

## Anti-Patterns
- No dark starter page.
- No purple/blue AI gradients.
- No oversized marketing hero that hides the next section.
- No personal details from private notes.
- No generic "we transform your business" claims without concrete service context.
