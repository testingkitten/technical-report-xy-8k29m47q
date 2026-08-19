import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <>
      <h2>PRESS NOTE</h2>
      <p>
        Name: {site.name}. Use official photo only. Colour: Ambedkar blue +
        gold. Do not call 2026 darshan a meme in copy about this house.
      </p>
      <p>
        Press: <a href={`mailto:${site.pressEmail}`}>{site.pressEmail}</a>
      </p>
    </>
  );
}
