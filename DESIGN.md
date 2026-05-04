# Onyx AI Studio - Design System (Strict Constraints)
  
**Agents MUST read this file before generating or modifying ANY frontend components.**

## 1. Visual Theme
- **Aesthetic:** Premium B2B SaaS (Stripe/Vercel hybrid). High trust, clean, accessible.
- **Mode:** Light mode default. Background is pure white `bg-white` or subtle `bg-slate-50`.

## 2. Color Palette (Tailwind)
- **Backgrounds:** `bg-white` for cards/surfaces, `bg-slate-50` for page backgrounds.
- **Primary Accent:** `bg-indigo-600` (Hover: `bg-indigo-700`).
- **Text:** `text-slate-900` (Headings), `text-slate-600` (Body).
- **NEVER use generic blue or raw black (#000000). Always use the Slate and Indigo scales.**

## 3. Typography
- **Font:** Inter (sans-serif).
- **Headings:** `tracking-tight font-bold text-slate-900`.
- **Body:** `leading-relaxed text-slate-600`.

## 4. Components & Layout
- **shadcn/ui ONLY:** If you need a button, card, or input, use the shadcn component. Do not write raw HTML buttons.
- **Corners:** Use `rounded-xl` or `rounded-2xl` for large cards, `rounded-md` for small buttons. NO sharp 0px corners.
- **Spacing:** Use massive whitespace. Sections must be padded with `py-24` or `py-32`. Elements in a flex/grid must use `gap-8` or `gap-12`. Do not crowd elements.
- **Shadows:** Use `shadow-sm` on cards and buttons.