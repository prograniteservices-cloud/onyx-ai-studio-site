# Product Functionality Document

## Framework
- Next.js 16 App Router.
- React 19.
- Tailwind CSS v4.
- shadcn-compatible owned primitives.

## Routes
| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Flagship AI operations landing page with hero, problem, system overview, proof, pricing, and CTA |
| `/services` | `src/app/services/page.tsx` | AI business system overview |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Static service detail pages generated from `src/lib/site-data.ts` |
| `/pricing` | `src/app/pricing/page.tsx` | Premium implementation and monthly management ranges |
| `/case-studies` | `src/app/case-studies/page.tsx` | Portfolio proof index |
| `/case-studies/[slug]` | `src/app/case-studies/[slug]/page.tsx` | Static portfolio proof detail pages |
| `/insights` | `src/app/insights/page.tsx` | AI operations insight index |
| `/insights/[slug]` | `src/app/insights/[slug]/page.tsx` | Static insight article |
| `/contact` | `src/app/contact/page.tsx` | AI Operations Review request form |
| `/api/contact` | `src/app/api/contact/route.ts` | SMTP-backed lead notification endpoint |
| `/robots.txt` | `src/app/robots.ts` | Crawler and AI bot access |
| `/sitemap.xml` | `src/app/sitemap.ts` | Search sitemap |
| `/llms.txt` | `public/llms.txt` | AI crawler content guide |

## Components
- `SiteHeader`: sticky navigation with the new AI business system hierarchy.
- `SiteFooter`: footer navigation, system links, proof links, and AI Operations Review CTA.
- `LogoMark`: SVG wordmark/mark component.
- `JsonLd`: JSON-LD script renderer.
- `ContactForm`: AI Operations Review form with business, website, industry, location, call-volume, problem, assistant-scope, and notes fields.
- `SectionHeading`: consistent section heading pattern.
- `ui/*`: shadcn-compatible primitives.

## Data
- `src/lib/site-data.ts` owns navigation, service, case study, insight, FAQ, pricing, problem, flow, and capability data.
- Dynamic service, case study, and insight routes read from that file and use `generateStaticParams`.
- Portfolio records are preserved and reframed as proof modules for the larger AI business operations offer.

## SEO Behavior
- Root layout defines metadata base, title template, description, Open Graph, Twitter, robots, Organization, and WebSite schema.
- Route pages export metadata.
- Pages render JSON-LD in body with absolute URLs.
- Sitemap is generated from static routes plus service, case study, and insight data.
- `llms.txt` describes the new flagship positioning and priority pages.

## Asset Handling
- Production visuals live in `public/`.
- SVG assets are used for logo and case study visuals.
- Hero video and poster remain in the first viewport.
- Asset prompts and rationale are documented in `DESIGN.md`.

## Form Behavior
- `/contact` posts JSON to `/api/contact`.
- Required AI Operations Review fields: name, business name, email, industry, locations, approximate call volume, main problem, assistant scope, and notes.
- Optional fields: phone and website.
- `/api/contact` normalizes string fields, validates required review fields, escapes HTML in the email body, and sends the lead through Infomaniak SMTP.
