import type { Metadata } from "next";
import Image from "next/image";
import { testimonies } from "@/lib/testimonies";

export const metadata: Metadata = { title: "Miracles" };

export default function MiraclesPage() {
  return (
    <>
      <h2>MIRACLES AND TESTIMONY</h2>
      <p className="center">
        <Image
          src="/images/digital-darshan.jpg"
          alt="Digital darshan"
          width={480}
          height={360}
          style={{ border: "5px ridge gold", maxWidth: "100%", height: "auto" }}
        />
      </p>
      {testimonies.map((item) => (
        <div className="yellow-box" key={item.name}>
          <p>
            <b>&quot;{item.quote}&quot;</b>
          </p>
          <p>
            - {item.name}, {item.place} ({item.role})
          </p>
        </div>
      ))}
    </>
  );
}
