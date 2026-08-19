import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <h2>CONTACT / HELPLINE</h2>
      <div className="blue-box">
        <p>
          <b>HELPLINE / WHATSAPP:</b>{" "}
          <a href={`tel:+91${site.helpline}`}>{site.helplineDisplay}</a>
        </p>
        <p>
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>Time: 8:00 AM to 10:00 PM</p>
      </div>
      <ContactForm />
    </>
  );
}
