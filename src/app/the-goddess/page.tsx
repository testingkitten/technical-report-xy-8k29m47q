import type { Metadata } from "next";
import Image from "next/image";
import { theology } from "@/lib/lore";

export const metadata: Metadata = {
  title: "Maa Dalit Mata",
};

export default function TheGoddessPage() {
  return (
    <>
      <h2>WHO IS MAA DALIT MATA</h2>
      <div className="center">
        <div className="gold-frame">
          <Image
            src="/images/dalit-mata-portrait.jpg"
            alt="Maa Dalit Mata"
            width={340}
            height={340}
          />
        </div>
      </div>
      <p>
        Maa Dalit Mata is the primordial Mother of the Oppressed. She is the
        Blue Goddess of Liberation and the living body of Bahujan
        consciousness. She is not a new fashion goddess. She is the old mother
        of indigenous peoples, suppressed, renamed, and now publicly returned
        in the 2026 digital darshan.
      </p>
      <p>
        Face, bindi, gold, and blue veil of the original photo are the official
        icon. Do not replace her with a generic calendar Devi.
      </p>
      {theology.map((item) => (
        <div className="yellow-box" key={item.title}>
          <b>{item.title.toUpperCase()}</b>
          <p>{item.body}</p>
        </div>
      ))}
      <h3>GODHA VAHANA</h3>
      <p className="center">
        <Image
          src="/images/godha-vahana.jpg"
          alt="Godha"
          width={400}
          height={300}
          style={{ border: "5px ridge gold", maxWidth: "100%", height: "auto" }}
        />
      </p>
      <p>
        Monitor lizard is her vehicle. Treat it like a temple animal. Hidden
        godha marks on wells and school walls kept the cult alive when temples
        were seized.
      </p>
    </>
  );
}
