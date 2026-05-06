"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface InputLine {
  id: number;
  y: number;
  duration: number;
  rotate: number;
}

export function RefractiveCore() {
  const [inputLines, setInputLines] = useState<InputLine[]>([]);

  useEffect(() => {
    // Wrap in requestAnimationFrame to avoid synchronous setState in effect
    const frame = requestAnimationFrame(() => {
      setInputLines(
        [...Array(6)].map((_, i) => ({
          id: i,
          y: 100 + i * 40,
          duration: 3 + Math.random() * 2,
          rotate: (Math.random() - 0.5) * 20,
        }))
      );
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-2xl border border-border/50 bg-background/50 shadow-2xl backdrop-blur-sm">
      {/* Central Prism (Onyx Core) */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-48 w-48">
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
          {/* SVG Core */}
          <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-2xl">
            <defs>
              <linearGradient id="top-facet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2C2C2C" />
                <stop offset="100%" stopColor="#121212" />
              </linearGradient>
              <linearGradient id="right-facet" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E1E1E" />
                <stop offset="100%" stopColor="#0A0A0A" />
              </linearGradient>
              <linearGradient id="highlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#444444" />
                <stop offset="100%" stopColor="#222222" />
              </linearGradient>
            </defs>
            <g transform="translate(40, 40)">
              <path
                d="M30 0 L90 0 L120 30 L120 90 L90 120 L30 120 L0 90 L0 30 Z"
                fill="#050505"
              />
              <path d="M30 0 L90 0 L105 15 L15 15 Z" fill="url(#top-facet)" />
              <path d="M90 0 L120 30 L105 45 L105 15 Z" fill="#0F0F0F" />
              <path d="M120 30 L120 90 L105 75 L105 45 Z" fill="url(#right-facet)" />
              <path d="M120 90 L90 120 L75 105 L105 75 Z" fill="#080808" />
              <path d="M90 120 L30 120 L15 105 L75 105 Z" fill="#030303" />
              <path d="M30 120 L0 90 L15 75 L15 105 Z" fill="#080808" />
              <path d="M0 90 L0 30 L15 45 L15 75 Z" fill="#121212" />
              <path d="M0 30 L30 0 L15 15 L15 45 Z" fill="#1A1A1A" />
              <path
                d="M15 15 L105 15 L105 105 L15 105 Z"
                fill="url(#highlight)"
                opacity="0.8"
              />
              <line x1="15" y1="15" x2="105" y2="15" stroke="#555" strokeWidth="0.5" />
              <line x1="15" y1="15" x2="15" y2="105" stroke="#555" strokeWidth="0.5" />
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Messy inputs (Left) */}
      <div className="absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden">
        {inputLines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ x: -100, opacity: 0, y: line.y }}
            animate={{
              x: 300,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.id * 0.8,
              ease: "linear",
            }}
            className="absolute h-px w-32 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"
            style={{ rotate: line.rotate }}
          />
        ))}
      </div>

      {/* Clean outputs (Right) */}
      <div className="absolute inset-y-0 right-0 z-20 w-1/2 overflow-hidden">
        {/* Glass Panel 1: Efficiency */}
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.8 }}
          animate={{ x: 20, opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-10 top-20 flex w-40 flex-col gap-2 rounded-lg border border-white/20 bg-white/10 p-3 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-accent">
              EFFICIENCY
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <div className="text-xl font-bold text-primary">98.4%</div>
          <div className="h-1 w-full rounded-full bg-black/5">
            <div className="h-full w-[98%] bg-accent" />
          </div>
        </motion.div>

        {/* Glass Panel 2: Latency */}
        <motion.div
          initial={{ x: 250, opacity: 0, scale: 0.8 }}
          animate={{ x: 60, opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-4 top-1/2 flex w-36 -translate-y-1/2 flex-col gap-2 rounded-lg border border-white/20 bg-white/10 p-3 shadow-xl backdrop-blur-md"
        >
          <span className="font-mono text-[10px] font-bold text-accent">
            LATENCY
          </span>
          <div className="text-lg font-bold text-primary">12ms</div>
          <div className="flex items-end gap-0.5 h-6">
            {[20, 40, 60, 30, 80, 50].map((h, i) => (
              <div key={i} className="bg-accent/40 w-full" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
