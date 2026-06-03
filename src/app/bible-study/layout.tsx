import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study the Word deeply.",
  description: "Structured book-by-book study with OIA notes: Observation, Interpretation, Application, Questions, and Cross-References.",
  openGraph: {
    title: "Study the Word deeply. — Vine",
    description: "Structured book-by-book study with OIA notes: Observation, Interpretation, Application, Questions, and Cross-References.",
    images: ["/api/og?title=Study+the+Word+deeply."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study the Word deeply. — Vine",
    description: "Structured book-by-book study with OIA notes: Observation, Interpretation, Application, Questions, and Cross-References.",
    images: ["/api/og?title=Study+the+Word+deeply."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
