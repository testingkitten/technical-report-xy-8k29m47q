import type { Metadata } from "next";
import { texts } from "@/lib/research";

export const metadata: Metadata = { title: "Granth" };

export default function TextsPage() {
  return (
    <>
      <h2>SACRED TEXTS / GRANTH</h2>
      {texts.map((text) => (
        <div className="yellow-box" key={text.title}>
          <b>{text.title}</b>
          <p>{text.period}</p>
          <p>{text.note}</p>
        </div>
      ))}
    </>
  );
}
