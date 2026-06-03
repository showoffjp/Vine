import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Discipline",
  description: "Jesus gave the church a graduated process for addressing unrepentant sin — not for punishment but for restoration. Matthew 18 is one of the most neglected and most necessary passages in the New Tes…",
  openGraph: {
    title: "Church Discipline — Vine",
    description: "Jesus gave the church a graduated process for addressing unrepentant sin — not for punishment but for restoration. Matthew 18 is one of the most neglected and most necessary passages in the New Tes…",
    images: ["/api/og?title=Church+Discipline"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Discipline — Vine",
    description: "Jesus gave the church a graduated process for addressing unrepentant sin — not for punishment but for restoration. Matthew 18 is one of the most neglected and most necessary passages in the New Tes…",
    images: ["/api/og?title=Church+Discipline"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
