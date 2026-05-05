# Design System

## Design Direction
Name: Light Editorial Systems Studio

Purpose: persuade business buyers that Onyx AI Studio can turn messy operations into useful AI-powered systems.

Tone: editorial, professional, precise, and quietly technical.

Differentiation anchor: the site uses a visible "messy inputs -> operating system" diagram language, brass rule lines, and proof-led service cards instead of generic AI gradients.

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
