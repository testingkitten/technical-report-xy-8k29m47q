import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: `+91${site.helpline}`,
    areaServed: "IN",
    slogan: site.tagline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
