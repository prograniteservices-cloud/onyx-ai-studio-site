"use client";

import { useEffect } from "react";

export function ScrollRevealHydrator() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".motion-reveal"));

    if (reduceMotion) {
      nodes.forEach((node) => {
        node.dataset.state = "visible";
      });
      return;
    }

    nodes.forEach((node) => {
      node.dataset.state = "hidden";
    });

    document.documentElement.dataset.motionReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.state = "visible";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return null;
}
