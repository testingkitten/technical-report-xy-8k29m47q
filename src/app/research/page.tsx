import type { Metadata } from "next";
import { papers } from "@/lib/research";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <h2>RESEARCH PAPERS</h2>
      {papers.map((paper) => (
        <div className="yellow-box" key={paper.title}>
          <b>{paper.title}</b>
          <p>
            {paper.authors} - {paper.venue} ({paper.year})
          </p>
          <p>{paper.abstract}</p>
        </div>
      ))}
    </>
  );
}
