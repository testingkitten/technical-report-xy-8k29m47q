import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <h2>CONTACT</h2>
      <div className="blue-box">
        <p>
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
      <ContactForm />
    </>
  );
}
