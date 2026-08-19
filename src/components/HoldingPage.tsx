"use client";

import { useEffect, useRef, useState } from "react";

const SECRET = "JAIDALITMATA";
const UNLOCK_KEY = "neel-darshan-open";

function isDesktop() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    window.innerWidth >= 900
  );
}

export function HoldingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(UNLOCK_KEY) === "1") setOpen(true);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "" : "hidden";
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    let typed = "";
    const onKey = (event: KeyboardEvent) => {
      if (!isDesktop()) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key.length !== 1) return;
      const letter = event.key.toUpperCase();
      if (letter < "A" || letter > "Z") {
        typed = "";
        return;
      }
      typed = (typed + letter).slice(-SECRET.length);
      if (typed === SECRET) {
        try {
          sessionStorage.setItem(UNLOCK_KEY, "1");
        } catch {
          /* ignore */
        }
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const W = canvas.width;
    const H = canvas.height;
    const PX = Math.max(5, Math.round(W / 60));
    const wickX = Math.round((W * 0.635) / PX);
    const wickY = Math.round((H * 0.38) / PX);

    const sparks = Array.from({ length: 18 }, () => ({
      x: W * 0.58 + Math.random() * W * 0.12,
      y: H * 0.18 + Math.random() * H * 0.2,
      s: PX,
      v: 0.4 + Math.random() * 0.7,
    }));

    let raf = 0;
    let t = 0;

    const pset = (gx: number, gy: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(gx * PX, gy * PX, PX, PX);
    };

    const drawFlame = () => {
      const lean = reduce ? 0 : Math.sin(t * 0.13) * 1.4 + Math.sin(t * 0.31) * 0.7;
      const tall = reduce ? 10 : 9 + Math.round(Math.sin(t * 0.17) * 2.2);
      const flicker = reduce ? 0 : Math.round(Math.sin(t * 0.47));

      ctx.fillStyle = "#0b1d3d";
      ctx.fillRect(W * 0.54, H * 0.12, W * 0.22, H * 0.32);

      for (let row = 0; row <= tall; row += 1) {
        const gy = wickY - 1 - row;
        const half = row < 2 ? 2 : Math.max(1, 3 - Math.floor((row - 1) / 3));
        const shift = Math.round((lean * row) / 5) + (row > 5 ? flicker : 0);
        for (let col = -half; col <= half; col += 1) {
          const edge = Math.abs(col) === half;
          let color = "#1e4bb8";
          if (row < 3 && Math.abs(col) <= 1) color = "#dceeff";
          else if (row < 5 && Math.abs(col) <= 1) color = "#7eb6ff";
          else if (row < 7) color = edge ? "#163a8a" : "#3d7eff";
          else color = edge ? "#102a66" : "#2563d4";
          if (row === 0 && col === 0) color = "#ffe7a8";
          pset(wickX + col + shift, gy, color);
        }
      }
      pset(wickX, wickY, "#5a3210");
      pset(wickX, wickY + 1, "#c47a2a");
    };

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, W, H);
      drawFlame();
      if (!reduce) {
        for (const spark of sparks) {
          spark.y -= spark.v;
          if (spark.y < H * 0.1) {
            spark.y = H * 0.38;
            spark.x = W * 0.58 + Math.random() * W * 0.12;
          }
          ctx.fillStyle = t % 8 < 4 ? "#3d7eff" : "#8ec5ff";
          ctx.fillRect(spark.x, spark.y, spark.s, spark.s);
        }
      }
      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(raf);
  }, [open]);

  if (open) return null;

  return (
    <div className="hold">
      <div className="hold-frame">
        <div className="hold-inner">
          <img
            className="hold-corner hold-corner-tl"
            src="/images/pixel-corner.jpg"
            alt=""
          />
          <img
            className="hold-corner hold-corner-tr"
            src="/images/pixel-corner.jpg"
            alt=""
          />
          <img
            className="hold-corner hold-corner-bl"
            src="/images/pixel-corner.jpg"
            alt=""
          />
          <img
            className="hold-corner hold-corner-br"
            src="/images/pixel-corner.jpg"
            alt=""
          />

          <div className="hold-lotuses" aria-hidden>
            <img src="/images/pixel-lotus.jpg" alt="" />
            <img src="/images/pixel-lotus.jpg" alt="" />
            <img src="/images/pixel-lotus.jpg" alt="" />
          </div>

          <div className="hold-stage">
            <img
              className="hold-lamp"
              src="/images/pixel-lamp.jpg"
              alt="Blue pixel lamp"
              width={360}
              height={360}
            />
            <canvas
              ref={canvasRef}
              className="hold-sparks"
              width={360}
              height={360}
            />
          </div>

          <div className="hold-plaque">
            <p className="hold-kicker">|| NEEL DEVI ||</p>
            <h1>Darshan is paused.</h1>
            <p className="hold-line">The lamp will be lit again soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
