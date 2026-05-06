# Hero Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a premium "Refractive Core" hero animation using Stitch-generated assets and Framer Motion.

**Architecture:** A central React component (`RefractiveCore`) that orchestrates the flow of "messy" data into a central "Onyx Core" and refracts them into "clean" Glass UI panels. 

**Tech Stack:** React (Next.js), Framer Motion, Tailwind CSS, Google Stitch (for asset generation).

---

### Task 1: Setup and Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install framer-motion**
Run: `npm install framer-motion`
Expected: `framer-motion` added to dependencies.

- [ ] **Step 2: Commit setup**
Run: `git add package.json package-lock.json && git commit -m "chore: add framer-motion dependency"`

### Task 2: Generate Assets with Stitch

**Files:**
- Create: `.stitch/metadata.json`
- Create: `.stitch/designs/onyx-core.html`
- Create: `.stitch/designs/glass-panels.html`

- [ ] **Step 1: Create Stitch Project**
Call: `mcp_stitch_create_project(title="Onyx AI Studio Hero")`
Expected: Project ID returned.

- [ ] **Step 2: Generate Onyx Core asset**
Call: `mcp_stitch_generate_screen_from_text(projectId="[PROJECT_ID]", prompt="A premium, dark faceted Onyx gem mark, editorial style, professional, high-end, SVG-ready")`
Wait 2-3 minutes, then get screen HTML.
Expected: HTML/CSS for the core.

- [ ] **Step 3: Generate Glass UI Panels**
Call: `mcp_stitch_generate_screen_from_text(projectId="[PROJECT_ID]", prompt="A set of 3 abstract glassmorphic UI panels for an AI operating system. One shows a data chart, one a workflow node map, one a clean feed. Minimalist, light editorial style.")`
Wait 2-3 minutes, then get screen HTML.
Expected: HTML/CSS for the glass panels.

- [ ] **Step 4: Save metadata**
Write `.stitch/metadata.json` with the project and screen IDs.

### Task 3: Create RefractiveCore Component

**Files:**
- Create: `src/components/refractive-core.tsx`
- Modify: `src/components/hero-system-visual.tsx` (to use the new component)

- [ ] **Step 1: Implement RefractiveCore with Framer Motion**
Create `src/components/refractive-core.tsx` and implement the "Refractive Core" logic:
```tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RefractiveCore() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto overflow-hidden">
      {/* Central Core */}
      <motion.div 
        animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        {/* SVG from Stitch goes here */}
        <div className="w-32 h-32 bg-primary rounded-lg shadow-2xl" />
      </motion.div>

      {/* Messy inputs (Left) */}
      <InputFlow />

      {/* Clean outputs (Right) */}
      <OutputFlow />
    </div>
  );
}

function InputFlow() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-1/2 z-10">
      {/* Animated messy lines */}
    </div>
  );
}

function OutputFlow() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 z-10">
      {/* Animated glass panels from Stitch */}
    </div>
  );
}
```

- [ ] **Step 2: Integrate Stitch assets**
Copy the generated SVG/HTML from Task 2 into the component. Clean up styles and convert to Tailwind/inline-CSS as needed.

### Task 4: Polish and Interactivity

**Files:**
- Modify: `src/components/refractive-core.tsx`

- [ ] **Step 1: Add Spring Physics and Mouse Parallax**
Implement `useMotionValue` and `useSpring` to make the panels tilt and shift based on mouse position.

- [ ] **Step 2: Final Polish**
Add the "sheen" and "glow" effects using CSS `conic-gradient` and `backdrop-filter`.

### Task 5: Verification and Cleanup

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update Hero Section**
Update the main page to use the `RefractiveCore` component in the hero visual slot.

- [ ] **Step 2: Visual verification**
Run `npm run dev` and check the animation on mobile and desktop.

- [ ] **Step 3: Commit final changes**
Run: `git add . && git commit -m "feat: implement premium Refractive Core hero animation"`
