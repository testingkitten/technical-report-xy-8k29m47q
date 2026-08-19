"use client";

import { useState } from "react";
import { mantras, type Mantra } from "@/lib/mantras";

export function BlessingButton() {
  const [mantra, setMantra] = useState<Mantra | null>(null);

  return (
    <div className="center" style={{ margin: "10px 0" }}>
      <button
        type="button"
        className="orange-btn"
        onClick={() =>
          setMantra(mantras[Math.floor(Math.random() * mantras.length)])
        }
      >
        ** CLICK HERE FOR TODAY BLESSING **
      </button>
      {mantra ? (
        <div className="yellow-box" style={{ textAlign: "left" }}>
          <b style={{ color: "#cc0000" }}>{mantra.title}</b>
          <p className="mantra-hi">{mantra.line}</p>
          <p>
            <i>{mantra.transliteration}</i>
          </p>
          <p>{mantra.meaning}</p>
        </div>
      ) : null}
    </div>
  );
}
