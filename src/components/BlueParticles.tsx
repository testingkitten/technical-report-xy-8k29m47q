"use client";

import { useReducedMotion } from "motion/react";

const dots = [
  { left: "8%", top: "18%", size: 2, delay: "0s" },
  { left: "16%", top: "72%", size: 3, delay: "1.2s" },
  { left: "28%", top: "34%", size: 2, delay: "2.4s" },
  { left: "41%", top: "12%", size: 2, delay: "0.6s" },
  { left: "54%", top: "80%", size: 3, delay: "1.8s" },
  { left: "67%", top: "26%", size: 2, delay: "2.8s" },
  { left: "78%", top: "62%", size: 2, delay: "0.3s" },
  { left: "88%", top: "20%", size: 3, delay: "2.1s" },
  { left: "92%", top: "48%", size: 2, delay: "1.4s" },
];

export function BlueParticles() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {dots.map((dot) => (
        <span
          key={`${dot.left}-${dot.top}`}
          className={`absolute rounded-full bg-white/35 ${reduce ? "" : "float-dot"}`}
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: reduce ? undefined : dot.delay,
          }}
        />
      ))}
    </div>
  );
}
