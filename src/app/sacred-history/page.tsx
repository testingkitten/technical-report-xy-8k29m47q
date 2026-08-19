import type { Metadata } from "next";
import Image from "next/image";
import { eras } from "@/lib/lore";

export const metadata: Metadata = { title: "5000 Year History" };

export default function SacredHistoryPage() {
  return (
    <>
      <h2>5000 YEAR SACRED HISTORY</h2>
      <p className="center">
        <Image
          src="/images/history-presence.jpg"
          alt="Mata at the ruins"
          width={640}
          height={400}
          style={{ border: "5px ridge gold", maxWidth: "100%", height: "auto" }}
        />
      </p>
      <p>
        This is written as history, not as joke. The Mother is suppressed,
        renamed, hidden, and then returned.
      </p>
      {eras.map((era) => (
        <div className="yellow-box" key={era.id}>
          <b style={{ color: "#cc0000" }}>{era.period}</b>
          <h3 style={{ marginTop: 8 }}>{era.title}</h3>
          <p>{era.body}</p>
        </div>
      ))}
    </>
  );
}
