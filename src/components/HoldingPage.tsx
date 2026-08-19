"use client";

import { useEffect, useRef } from "react";

export function HoldingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const PX = 6;
    const colors = ["#163a8a", "#1e5ad4", "#3d7eff", "#8ec5ff", "#ffffff"];

    const sparks = Array.from({ length: 22 }, () => ({
      x: 210 + Math.random() * 40,
      y: 80 + Math.random() * 90,
      s: PX,
      v: 0.35 + Math.random() * 0.55,
      c: colors[1 + Math.floor(Math.random() * 3)],
    }));

    let raf = 0;
    let t = 0;

    const pixel = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(Math.floor(x) * PX, Math.floor(y) * PX, PX, PX);
    };

    const drawFlame = () => {
      const lean = reduce ? 0 : Math.sin(t * 0.11) * 1.2 + Math.sin(t * 0.27) * 0.6;
      const tall = reduce ? 9 : 8 + Math.round(Math.sin(t * 0.19) * 2);
      const flicker = reduce ? 0 : Math.round(Math.sin(t * 0.41));
      const originX = 39;
      const originY = 21;

      for (let row = 0; row < tall + 2; row += 1) {
        const y = originY - row;
        const width = Math.max(1, 4 - Math.floor(row / 2) + (row < 3 ? 1 : 0));
        const shift = Math.round((lean * row) / 4) + (row > 4 ? flicker : 0);
        for (let col = -width; col <= width; col += 1) {
          const dist = Math.abs(col) + row * 0.15;
          let color = colors[1];
          if (row < 2 && Math.abs(col) < 2) color = colors[3];
          if (row < 4 && Math.abs(col) === 0) color = colors[4];
          if (row >= 3 && row < 6 && Math.abs(col) <= 1) color = colors[2];
          if (row >= 6) color = colors[1];
          if (dist > 4.2) color = colors[0];
          pixel(originX + col + shift, y, color);
        }
      }
      pixel(originX, originY + 1, "#c47a2a");
      pixel(originX, originY + 2, "#6b3a12");
    };

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0b1d3d";
      ctx.fillRect(188, 36, 110, 140);
      drawFlame();
      if (!reduce) {
        for (const spark of sparks) {
          spark.y -= spark.v;
          if (spark.y < 40) {
            spark.y = 170;
            spark.x = 200 + Math.random() * 50;
          }
          ctx.fillStyle = spark.c;
          ctx.globalAlpha = 0.55;
          ctx.fillRect(spark.x, spark.y, spark.s, spark.s);
          ctx.globalAlpha = 1;
        }
      }
      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(raf);
  }, []);

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
