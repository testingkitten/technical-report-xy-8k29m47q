import type { Metadata } from "next";
import { DonateForm } from "@/components/DonateForm";

export const metadata: Metadata = { title: "Offering" };

export default function DonatePage() {
  return (
    <>
      <h2>GURU DAKSHINA / OFFERING</h2>
      <p>
        Money is for school books, legal aid, and printing Mata photo for
        those who cannot print. Blessing is not sold.
      </p>
      <DonateForm />
    </>
  );
}
