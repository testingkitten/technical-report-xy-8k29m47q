import Image from "next/image";
import Link from "next/link";
import { BlessingButton } from "@/components/BlessingButton";
import { officialMantra } from "@/lib/mantras";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <h2>
        <span className="blink">*** WELCOME ***</span>
      </h2>
      <p className="center">
        <b style={{ color: "#cc0000", fontSize: 18 }}>
          OFFICIAL TEMPLE + SANGHA WEBSITE OF MAA DALIT MATA
        </b>
        <br />
        Blue Goddess of Liberation * 5000 Year Living History * Digital Darshan
        2026
      </p>

      <div className="center">
        <div className="gold-frame">
          <Image
            src="/images/dalit-mata-original.png"
            alt="Maa Dalit Mata original darshan photo"
            width={360}
            height={360}
          />
        </div>
        <p>
          <b style={{ color: "#000080" }}>MAA DALIT MATA</b>
          <br />
          <span style={{ color: "#cc0000" }}>Neel Devi * Godha Vahini * Bahujan Mata</span>
        </p>
      </div>

      <BlessingButton />

      <div className="blue-box">
        <h3>TODAY MANTRA / AAJ KA MANTRA</h3>
        <p className="mantra-hi" style={{ color: "#ffff66" }}>
          {officialMantra.line}
        </p>
        <p>
          <i>{officialMantra.transliteration}</i>
        </p>
        <p>{officialMantra.meaning}</p>
        <p>
          <b>Count:</b> 11 times morning, 21 times Tuesday, 108 times on 14
          April and 14 October.
        </p>
      </div>

      <div className="yellow-box">
        <h3 style={{ marginTop: 0 }}>TODAY COMPULSORY PRACTICE</h3>
        <ol>
          <li>Bath + one blue cloth / blue bindi</li>
          <li>Open Mata photo, wipe frame</li>
          <li>Light 1 diya (or blue phone light)</li>
          <li>Root mantra 11 times</li>
          <li>Read 1 page (Ambedkar / school book / Constitution)</li>
          <li>Evening aarti 3 circles of lamp</li>
          <li>Night: 60 second digital darshan, then sleep</li>
        </ol>
        <p className="center">
          <Link className="orange-btn" href="/daily-puja">
            FULL DAILY PUJA VIDHI
          </Link>{" "}
          <Link className="orange-btn" href="/path">
            STEP BY STEP PHOTOS
          </Link>
        </p>
      </div>

      <table className="two-col">
        <tbody>
          <tr>
            <td style={{ width: "50%" }}>
              <h3>LATEST UPDATES</h3>
              <ul>
                <li>
                  <span className="new">NEW</span> Daily Puja page expanded
                  with morning, noon, evening, night
                </li>
                <li>
                  <span className="new">NEW</span> Tuesday Neel Vrat rules
                  posted
                </li>
                <li>Digital Darshan method for mobile phone</li>
                <li>Helpline {site.helplineDisplay} working 8 AM - 10 PM</li>
              </ul>
            </td>
            <td>
              <h3>QUICK SEVA</h3>
              <p>
                <Link href="/join">Join Neel Sangha</Link>
                <br />
                <Link href="/teachings">All Mantras with meaning</Link>
                <br />
                <Link href="/calendar">Blue Calendar 2026</Link>
                <br />
                <Link href="/donate">Guru Dakshina / Offering</Link>
                <br />
                <a href={`https://wa.me/91${site.helpline}`}>WhatsApp Helpline</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="blue-box">
        <h3>JAI BHIM / BUDDHA / AMBEDKAR PATH</h3>
        <p>
          <b>Babasaheb B. R. Ambedkar</b> is the chosen son of Mata. Blue
          suit, Constitution, and the Buddhist conversion are kept here as
          one worship.
        </p>
        <p>
          <b>14 October 1956, Diksha Bhoomi, Nagpur:</b> mass conversion to
          Navayana Buddhism. Recite Buddham saranam. Read one page of
          Annihilation of Caste or the Constitution. Article 17 is a daily
          sutra.
        </p>
        <p>
          <b>22 Vows:</b> no Hindu gods as higher than self-respect, no
          Brahmin priest as gatekeeper, walk the Buddha path, treat all
          human beings as equal. Full list is read aloud on Diksha day.
        </p>
        <p>
          Also remembered: Iyothee Thass and the older Tamil Buddhist
          revival. Buddha is not a foreign guest in this house.
        </p>
      </div>

      <hr className="stars" />

      <h3>WHO IS MAA DALIT MATA ?</h3>
      <table className="two-col">
        <tbody>
          <tr>
            <td>
              <p>
                Maa Dalit Mata is the original Mother of oppressed peoples.
                Blue colour is her colour because the sky is free for all.
                Her vehicle (vahana) is the monitor lizard (godha). Her weapon
                is Neel Agni - the blue fire of knowledge and self-respect.
              </p>
              <p>
                Phule, Savitribai, Fatima Sheikh, Ambedkar, Ayyankali, Periyar
                and Iyothee Thass are her instruments. August 2026 digital
                darshan is not a joke. It is public appearance of the Mother.
              </p>
              <p>
                <Link href="/the-goddess">Read full Mata introduction</Link>
              </p>
            </td>
            <td className="center">
              <Image
                src="/images/dalit-mata-icon.jpg"
                alt="Sacred oil icon of Dalit Mata"
                width={260}
                height={260}
                style={{ border: "4px ridge gold" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
