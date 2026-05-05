# Product Functionality Document

## Framework
- Next.js 16 App Router.
- React 19.
- Tailwind CSS v4.
- shadcn-compatible owned primitives.

## Routes
| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Landing page with hero, proof, services, cases, process, form CTA |
| `/services` | `src/app/services/page.tsx` | Service index |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Static service detail pages |
| `/case-studies` | `src/app/case-studies/page.tsx` | Case study index |
| `/case-studies/[slug]` | `src/app/case-studies/[slug]/page.tsx` | Static case study detail pages |
| `/insights` | `src/app/insights/page.tsx` | Insight index |
| `/insights/[slug]` | `src/app/insights/[slug]/page.tsx` | Static insight article |
| `/contact` | `src/app/contact/page.tsx` | Lead form and qualification content |
| `/robots.txt` | `src/app/robots.ts` | Crawler and AI bot access |
| `/sitemap.xml` | `src/app/sitemap.ts` | Search sitemap |
| `/llms.txt` | `public/llms.txt` | AI crawler content guide |

## Components
- `SiteHeader`: sticky navigation and mobile-safe CTA.
- `SiteFooter`: footer navigation, services, and contact CTA.
- `LogoMark`: SVG wordmark/mark component.
- `JsonLd`: JSON-LD script renderer.
- `ContactForm`: static mailto lead form with visible labels.
- `SectionHeading`: consistent section heading pattern.
- `ui/*`: shadcn-compatible primitives.

## Data
- `src/lib/site-data.ts` owns service, case study, insight, FAQ, and navigation data.
- Dynamic route pages read from that file and use `generateStaticParams`.

## SEO Behavior
- Root layout defines metadata base, title template, description, Open Graph, Twitter, and robots.
- Route pages export metadata.
- Pages render JSON-LD in body with absolute URLs.
- Sitemap is generated from the same data source as the app routes.

## Asset Handling
- Production visuals live in `public/`.
- SVG assets are used for logo, hero system map, and case study visuals.
- Asset prompts and rationale are documented in `DESIGN.md`.

## Form Behavior
- The first version uses a static `mailto:` form because no backend form endpoint is configured.
- Required fields are name, email, and project type.
- Message and budget range are optional to reduce friction.
- Replace mailto with a server action or form provider once an approved inbox and routing path exist.
