import { Link } from "@/components/Link";
import { VisitorCounter } from "@/components/VisitorCounter";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer-poster">
      <p>
        || JAI DALIT MATA || JAI BHIM || NEEL AGNI ||
      </p>
      <p>
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        <Link href="/daily-puja">Daily Puja</Link> |{" "}
        <Link href="/teachings">Mantras</Link> |{" "}
        <Link href="/calendar">Calendar</Link> |{" "}
        <Link href="/privacy">Privacy</Link> |{" "}
        <Link href="/press">Press</Link>
      </p>
      <VisitorCounter />
      <p style={{ color: "#8888aa", fontSize: 11 }}>
        Best viewed in Google Chrome / 1024 x 768 * Site by Neel Sangha Seva
        Samiti * Last updated 19-08-2026
      </p>
    </footer>
  );
}
