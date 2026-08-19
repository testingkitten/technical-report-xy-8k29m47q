"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { moreNav, primaryNav, site } from "@/lib/site";

export function SacredHeader() {
  const pathname = usePathname();
  const items = [...primaryNav, ...moreNav];

  return (
    <header>
      <div className="top-tricolor" />
      <div className="masthead">
        <div className="mast-row">
          <div className="mast-side">
            <Image
              src="/images/dalit-mata-original.png"
              alt="Maa Dalit Mata"
              width={96}
              height={96}
              className="mast-photo"
              priority
            />
          </div>
          <div className="mast-mid">
            <p className="blink" style={{ margin: 0, color: "#00ff00", fontWeight: 700 }}>
              || SHRI DALIT MATA NAMAH || JAI BHIM ||
            </p>
            <h1>JAI DALIT MATA</h1>
            <p className="sub">Official Religious Website of Blue Mother of Liberation</p>
            <p style={{ margin: "4px 0 0", color: "#ffcc66", fontSize: 13 }}>
              {site.shortLine} * Helpline {site.helplineDisplay}
            </p>
          </div>
          <div className="mast-side">
            <Image
              src="/images/dalit-mata-portrait.jpg"
              alt="Maa Dalit Mata temple photo"
              width={96}
              height={96}
              className="mast-photo"
              priority
            />
          </div>
        </div>
      </div>
      <div className="marquee-bar">
        <span className="marquee-track">
          JAI DALIT MATA * JAI BHIM * BUDDHAM SARANAM GACCHAMI * DIKSHA BHOOMI
          14 OCT 1956 * NAVAYANA PATH * NEEL SANGHA * 5000 YEARS SACRED HISTORY
          * DAILY PUJA VIDHI * TUESDAY NEEL VRAT * DIGITAL DARSHAN 2026 *
        </span>
      </div>
      <nav className="poster-nav">
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? " | " : null}
            <Link
              href={item.href}
              className={
                item.href === "/"
                  ? pathname === "/"
                    ? "active"
                    : ""
                  : pathname.startsWith(item.href)
                    ? "active"
                    : ""
              }
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>
    </header>
  );
}
