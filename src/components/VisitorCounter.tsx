"use client";

import { useEffect, useState } from "react";

const EPOCH = Date.parse("2026-08-19T00:00:00Z");
const BASE = 38421;
const STORAGE = "neel-visitor-count";

function hourRate(hourIndex: number) {
  const x = Math.sin(hourIndex * 12.9898) * 43758.5453;
  const unit = x - Math.floor(x);
  return 120 + Math.floor(unit * 281);
}

function countAt(now: number) {
  const elapsed = Math.max(0, now - EPOCH);
  const hours = elapsed / 3_600_000;
  const full = Math.floor(hours);
  let total = BASE;
  for (let h = 0; h < full; h += 1) {
    total += hourRate(h);
  }
  total += Math.floor(hourRate(full) * (hours - full));
  return total;
}

function pad(n: number) {
  return String(n).padStart(8, "0");
}

export function VisitorCounter() {
  const [n, setN] = useState(BASE);

  useEffect(() => {
    const floor = countAt(Date.now());
    let stored = 0;
    try {
      stored = Number(window.localStorage.getItem(STORAGE) || 0);
    } catch {
      stored = 0;
    }
    let current = Math.max(floor, stored);
    setN(current);

    const write = (value: number) => {
      current = value;
      setN(value);
      try {
        window.localStorage.setItem(STORAGE, String(value));
      } catch {
        /* ignore */
      }
    };

    let timeout = 0;
    const tick = () => {
      const wait = 9_000 + Math.random() * 21_000;
      timeout = window.setTimeout(() => {
        write(Math.max(current + 1, countAt(Date.now())));
        tick();
      }, wait);
    };
    tick();

    const sync = window.setInterval(() => {
      write(Math.max(current, countAt(Date.now())));
    }, 15_000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(sync);
    };
  }, []);

  return (
    <p className="visitor-hit">
      You are visitor no. <span className="counter">{pad(n)}</span>
    </p>
  );
}
