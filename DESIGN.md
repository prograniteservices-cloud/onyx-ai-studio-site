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
- Required: name, email, project type.
- Optional: budget range, message.
- Visible labels, single column, 44px minimum targets.
- Trust copy near submit: "No spam. You will get a practical next-step reply."

## Anti-Patterns
- No dark starter page.
- No purple/blue AI gradients.
- No oversized marketing hero that hides the next section.
- No personal details from private notes.
- No generic "we transform your business" claims without concrete service context.
