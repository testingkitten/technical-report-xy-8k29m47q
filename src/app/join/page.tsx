import type { Metadata } from "next";
import { JoinForm } from "@/components/JoinForm";

export const metadata: Metadata = { title: "Join Neel Sangha" };

export default function JoinPage() {
  return (
    <>
      <h2>JOIN NEEL SANGHA</h2>
      <p>
        Fill the form. No fee. From tomorrow: 11 mantras + 1 page study.
        Tuesday extra.
      </p>
      <JoinForm />
    </>
  );
}
