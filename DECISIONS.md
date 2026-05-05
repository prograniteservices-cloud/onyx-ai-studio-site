# Decisions

## Locked

### D-001: Keep App In `onyx-ai-studio-site/`
The website remains contained in this app folder.

### D-002: Next.js App Router
Use the existing Next.js 16 App Router scaffold instead of starting a second app.

### D-003: shadcn Style
Use shadcn `new-york` style with `neutral` base color. Do not use Default, Zinc, or Slate as the locked base.

### D-004: Light Editorial Design
The site is light-mode-first, professional, proof-led, and editorial. Avoid dark starter pages, purple AI gradients, and generic SaaS template composition.

### D-005: Public Privacy Boundary
Do not use personal details from private parent-context files in public copy, metadata, screenshots, schema, or prompts.

### D-006: SEO/GEO Foundation
The first version includes metadata, sitemap, robots, `llms.txt`, extractable answer blocks, and JSON-LD. Keyword volume research is deferred until DataForSEO or another source is configured.

### D-007: Static Contact Form For MVP
Use a static `mailto:` contact path until the user confirms a domain inbox or form backend.

### D-008: GitHub And Vercel Hosting
Use the app folder as the standalone Git repository and deploy through Vercel at `https://onyx-ai-studio-site.vercel.app` until a custom domain is connected.

### D-009: CSS-First Motion System
Use CSS and a small IntersectionObserver reveal component for premium motion. Avoid heavy animation libraries unless a future interaction requires timeline orchestration.
