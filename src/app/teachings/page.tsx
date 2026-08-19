import type { Metadata } from "next";
import { BlessingButton } from "@/components/BlessingButton";
import { mantras } from "@/lib/mantras";

export const metadata: Metadata = {
  title: "Mantras",
};

export default function TeachingsPage() {
  return (
    <>
      <h2>OFFICIAL MANTRAS</h2>
      <p className="center">
        Recite in Hindi, Marathi, Tamil, English or your home language. Meaning
        matters more than accent.
      </p>
      <BlessingButton />
      {mantras.map((mantra, index) => (
        <div className="yellow-box" key={mantra.id}>
          <h3 style={{ marginTop: 0 }}>
            MANTRA {index + 1}: {mantra.title}
          </h3>
          <p className="mantra-hi">{mantra.line}</p>
          <p>
            <b>Uchcharan:</b> <i>{mantra.transliteration}</i>
          </p>
          <p>
            <b>Arth / Meaning:</b> {mantra.meaning}
          </p>
          <p>
            <b>When:</b>{" "}
            {index === 0
              ? "Every sitting. 11 / 21 / 108."
              : index === 1
                ? "Before study, exam, court, union meeting."
                : index === 2
                  ? "When looking at the sky or a well."
                  : index === 3
                    ? "When opening a book or school bag."
                    : "Night digital darshan."}
          </p>
        </div>
      ))}
      <div className="blue-box">
        <h3>HOW TO COUNT</h3>
        <p>
          Right hand. Thumb touches each section of the four fingers = 12. Stop
          at 11 on ordinary days. Do not use a purchased expensive mala if the
          house needs rice. Fingers are older than shops.
        </p>
      </div>
    </>
  );
}
