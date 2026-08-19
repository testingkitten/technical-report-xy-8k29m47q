import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import { Noto_Serif_Devanagari } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SacredHeader } from "@/components/SacredHeader";
import { site } from "@/lib/site";
import "./globals.css";

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto",
  display: "swap",
});

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Official Religious Website`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.variable}>
        <div className="blank-overlay">
          <div className="blank-card">
            <Image
              src="/images/neel-agni.jpg"
              alt=""
              width={280}
              height={200}
              className="blank-lamp"
              priority
            />
            <h1>Darshan is paused.</h1>
            <p>The lamp will be lit again soon.</p>
          </div>
        </div>
        <JsonLd />
        <div className="site-outer">
          <SacredHeader />
          <div className="page">{children}</div>
          <Footer />
        </div>
        <div className="leader-corner">
          <a
            href="https://x.com/DalitMata"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLLOW OUR LEADER
          </a>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
