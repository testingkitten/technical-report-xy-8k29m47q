import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Project",
  robots: { index: false, follow: false },
};

export default function AboutTheProjectPage() {
  return (
    <>
      <h2>ABOUT THE PROJECT</h2>
      <p>
        This site is a satirical art project extending the August 2026 Dalit
        Mata meme. Public pages stay in character. This page is not in the main
        menu.
      </p>
    </>
  );
}
