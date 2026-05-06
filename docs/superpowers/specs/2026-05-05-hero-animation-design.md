# Design Spec: Hero Animation - The Refractive Core

**Date:** 2026-05-05
**Status:** Draft
**Topic:** Premium Hero Animation for Onyx AI Studio

## 1. Overview
The goal is to create a "badass," premium hero animation for the Onyx AI Studio landing page. The animation serves as a visual metaphor for the studio's value proposition: transforming messy, unstructured business operations into clear, high-performance AI-powered systems.

## 2. Visual Concept: "The Refractive Core"
A central, dark faceted Onyx prism (The Core) sits at the center of the hero section. 
- **Inputs (Left):** Messy, sketchy "blueprint" lines and unstructured data fragments flow toward the Core.
- **The Core:** A sophisticated, high-fidelity faceted SVG or CSS shape that "refracts" and organizes the data.
- **Outputs (Right):** Clean, professional "Glass OS" UI panels and organized data structures emerge and float outward.

## 3. Technical Architecture

### 3.1 Visual Asset Generation (Google Stitch)
We will use **Google Stitch** to generate the high-fidelity visual components:
- **The Onyx Core:** A faceted, dark, editorial-style mark.
- **Glass UI Panels:** A set of 3-4 abstract UI components (e.g., a data chart, a workflow map, a clean feed) with glassmorphic styling (`backdrop-filter`, thin borders).

### 3.2 Animation Engine (Framer Motion)
To achieve "premium" motion, we will use **Framer Motion** in the React hero component.
- **Spring Physics:** Use spring transitions for all movements to ensure they feel "heavy" and "natural" rather than robotic.
- **Staggered Orchestration:** 
    1. Grid background fades in.
    2. The Core pulses and sheens.
    3. Input lines begin their flow.
    4. Glass panels emerge from the Core with a slight 3D drift.
- **Interactive Response:** Subtle parallax effect where the panels and Core react to mouse movement (tilt/shift).

### 3.3 Design System Alignment
- **Colors:** Background (`#f7f4ee`), Foreground (`#17130f`), Accent (`#0f7b75`), Amber (`#b96924`).
- **Typography:** Geist Mono for any "data" text inside the animation.
- **Aesthetic:** Light Editorial (high contrast, clean lines, professional).

## 4. Components to Build/Update
- `src/components/hero-system-visual.tsx`: This component will be completely overhauled or replaced with the new Refractive Core implementation.
- `src/app/globals.css`: Update or add specific keyframes and glass styles if needed (though Framer Motion will handle most).

## 5. Success Criteria
- The animation feels "alive" and premium immediately upon page load.
- Motion is smooth and respects `prefers-reduced-motion`.
- The visual metaphor (Messy -> Core -> Clean) is immediately clear to the user.
- Performance remains high (no frame drops on standard devices).

## 6. Implementation Plan (High-Level)
1. **Stitch Generation:** Generate the Core and Glass UI assets.
2. **Scaffold Component:** Create the new `RefractiveCore` component structure.
3. **Motion Setup:** Implement the basic flow of elements using Framer Motion.
4. **Polish:** Add the "sheen" effects, spring physics, and interactive parallax.
5. **Verification:** Test on mobile/desktop and ensure accessibility compliance.
