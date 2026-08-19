import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
        <JsonLd />
        <div className="site-outer">
          <SacredHeader />
          <div className="page">{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
