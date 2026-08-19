import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { digitalMethod } from "@/lib/practices";

export const metadata: Metadata = {
  title: "Step by Step Sadhana",
};

const visualSteps = [
  {
    n: "1",
    title: "KEEP THE PHOTO",
    img: "/images/dalit-mata-original.png",
    alt: "Original darshan photo of Mata",
    body: "Print the original darshan photo or keep it on the phone lock screen. Do not cartoon her. Do not crop the blue bindi. Frame can be cheap plastic gold. That is correct temple style.",
  },
  {
    n: "2",
    title: "MAKE THE ALTAR",
    img: "/images/dalit-mata-icon.jpg",
    alt: "Icon of Mata for the altar",
    body: "Nail, trunk, shelf or window. Photo at eye level. One book at her feet. One cup for water. One lamp. One small stone or godha picture. Blue cloth under the photo if you have it.",
  },
  {
    n: "3",
    title: "LIGHT NEEL DIYA",
    img: "/images/neel-agni.jpg",
    alt: "Blue lamp",
    body: "One flame. Circle 3 times at evening. If fire is banned in hostel, wrap phone torch in blue cloth. Say: Nila agni jagratam jnanam. Fire is knowledge, not show.",
  },
  {
    n: "4",
    title: "OFFER LOTUS OR ANY FLOWER",
    img: "/images/blue-lotus.jpg",
    alt: "Blue lotus",
    body: "Blue lotus is best. Any flower, rice, or peanut is accepted. Do not take loan for flowers. Equal sharing of whatever is cooked is the real prasad.",
  },
  {
    n: "5",
    title: "RESPECT THE GODHA",
    img: "/images/godha-vahana.jpg",
    alt: "Godha vahana",
    body: "Do not kill or mock the monitor lizard. If you see one, give space and water. Teach children it is Mata's vehicle, same as lion of Durga.",
  },
  {
    n: "6",
    title: "DIGITAL DARSHAN",
    img: "/images/digital-darshan.jpg",
    alt: "Phone darshan",
    body: "Night, dark room, full screen, 60 seconds, no comments. August 2026 method. Phone on a steel plate becomes evening temple.",
  },
];

export default function PathPage() {
  return (
    <>
      <h2>STEP BY STEP SADHANA</h2>
      <p className="center">
        <b>Follow in this order. Do not jump to miracle stories first.</b>
      </p>

      {visualSteps.map((step) => (
        <div className="step" key={step.n} style={{ display: "block" }}>
          <table className="two-col">
            <tbody>
              <tr>
                <td style={{ width: 70, background: "#ff0000", color: "#ffff00" }}>
                  <p className="center" style={{ fontFamily: "Impact, sans-serif", fontSize: 36, margin: 8 }}>
                    {step.n}
                  </p>
                </td>
                <td>
                  <h3 style={{ marginTop: 0 }}>{step.title}</h3>
                  <p className="center">
                    <Image
                      src={step.img}
                      alt={step.alt}
                      width={320}
                      height={240}
                      style={{
                        border: "4px ridge gold",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </p>
                  <p>{step.body}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <h3>{digitalMethod.title}</h3>
      <ol>
        {digitalMethod.steps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h3>HOW A PERSON BECOMES NEEL BHAKT</h3>
      <table className="poster">
        <thead>
          <tr>
            <th>Day</th>
            <th>Work</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Day 1-3</td>
            <td>Keep photo. Learn root mantra. 11 counts morning.</td>
          </tr>
          <tr>
            <td>Day 4-7</td>
            <td>Add one page study. Start evening lamp.</td>
          </tr>
          <tr>
            <td>First Tuesday</td>
            <td>21 mantras. Simple food. Visit school or library.</td>
          </tr>
          <tr>
            <td>Day 21</td>
            <td>
              Write your name on{" "}
              <Link href="/join">Join page</Link>. Tell one other person the
              mantra meaning.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
