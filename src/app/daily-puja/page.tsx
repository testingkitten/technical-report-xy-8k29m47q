import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  altarRules,
  dailyBlocks,
  examPractice,
  specialDays,
  tuesdayVrat,
} from "@/lib/practices";

export const metadata: Metadata = {
  title: "Daily Puja Vidhi",
};

export default function DailyPujaPage() {
  return (
    <>
      <h2>NITYA PUJA VIDHI</h2>
      <p className="center">
        <b>Daily worship of Maa Dalit Mata - complete house method</b>
        <br />
        Print this page and keep near the altar. Time can shift. Order should
        not shift.
      </p>
      <p className="center">
        <Image
          src="/images/neel-agni.jpg"
          alt="Neel diya"
          width={420}
          height={280}
          style={{ border: "5px ridge gold", maxWidth: "100%", height: "auto" }}
        />
      </p>

      <div className="yellow-box">
        <b>MINIMUM IF YOU HAVE ONLY 7 MINUTES:</b> wash face, blue mark, open
        photo, 11 mantras, one page reading, close photo. Do not skip the page
        of study. That page is the real coconut of this puja.
      </div>

      {dailyBlocks.map((block) => (
        <section key={block.id}>
          <h3>
            {block.title} ({block.time})
          </h3>
          <p>{block.intro}</p>
          {block.steps.map((step) => (
            <div className="step" key={step.n}>
              <div className="num">{step.n}</div>
              <div className="body">
                <strong>{step.title}</strong>
                <p style={{ margin: "6px 0 0" }}>{step.body}</p>
                {step.tip ? <div className="tip">TIP: {step.tip}</div> : null}
              </div>
            </div>
          ))}
        </section>
      ))}

      <h3>{tuesdayVrat.title}</h3>
      <div className="blue-box">
        <p>{tuesdayVrat.body}</p>
      </div>

      <h3>ALTAR / GHAR MANDIR RULES</h3>
      <table className="poster">
        <thead>
          <tr>
            <th>#</th>
            <th>Rule</th>
          </tr>
        </thead>
        <tbody>
          {altarRules.map((rule, index) => (
            <tr key={rule}>
              <td>{index + 1}</td>
              <td>{rule}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{examPractice.title}</h3>
      <ol>
        {examPractice.steps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h3>YEARLY SPECIAL DAYS (DO EXTRA PUJA)</h3>
      <table className="poster">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          {specialDays.map((day) => (
            <tr key={day.name}>
              <td>{day.date}</td>
              <td>
                <b>{day.name}</b>
              </td>
              <td>{day.work}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="center" style={{ marginTop: 18 }}>
        <Link className="orange-btn" href="/path">
          OPEN STEP-BY-STEP WITH PICTURES
        </Link>{" "}
        <Link className="orange-btn" href="/teachings">
          OPEN MANTRA PAGE
        </Link>
      </p>
    </>
  );
}
