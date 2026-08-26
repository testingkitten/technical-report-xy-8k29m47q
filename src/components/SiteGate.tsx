"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const HOLY = "00000000";

export function SiteGate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [miss, setMiss] = useState(false);
  const match = [...value].filter((ch, i) => ch === HOLY[i]).length;

  useEffect(() => {
    inputRef.current?.focus();
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
    let grow = match / HOLY.length;

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
      const lean = reduce ? 0 : Math.sin(t * 0.13) * (0.6 + grow * 1.2);
      const tall = (reduce ? 6 : 5) + Math.round(grow * 7) + (reduce ? 0 : Math.round(Math.sin(t * 0.17) * (1 + grow)));
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
          spark.y -= spark.v * (0.6 + grow);
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
  }, [open, match]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (value === HOLY) {
      setOpen(true);
      setMiss(false);
      return;
    }
    setMiss(true);
    setValue("");
    inputRef.current?.focus();
  }

  if (open) return null;

  return (
    <div className="hold">
      <div className="hold-frame">
        <div className="hold-inner">
          <img className="hold-corner hold-corner-tl" src="/images/pixel-corner.jpg" alt="" />
          <img className="hold-corner hold-corner-tr" src="/images/pixel-corner.jpg" alt="" />
          <img className="hold-corner hold-corner-bl" src="/images/pixel-corner.jpg" alt="" />
          <img className="hold-corner hold-corner-br" src="/images/pixel-corner.jpg" alt="" />

          <div className="hold-lotuses" aria-hidden>
            <img src="/images/pixel-lotus.jpg" alt="" />
            <img src="/images/pixel-lotus.jpg" alt="" />
            <img src="/images/pixel-lotus.jpg" alt="" />
          </div>

          <div className="hold-stage">
            <img
              className="hold-lamp"
              src="/images/pixel-lamp.jpg"
              alt=""
              width={360}
              height={360}
            />
            <canvas ref={canvasRef} className="hold-sparks" width={360} height={360} />
          </div>

          <form className="hold-plaque" onSubmit={onSubmit}>
            <p className="hold-kicker">|| NEEL DEVI ||</p>
            <h1>Speak the holy words.</h1>
            <p className="hold-line">Then the door opens.</p>
            <input
              ref={inputRef}
              className="hold-words"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                setMiss(false);
              }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Holy words"
            />
            {miss ? <p className="hold-miss">The lamp did not hear.</p> : null}
          </form>
        </div>
      </div>
    </div>
  );
}
