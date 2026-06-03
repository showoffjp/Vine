import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible Commentary Guide",
  description: "The best commentaries for every level and purpose — from devotional reading to academic exegesis. Commentaries are tools; knowing which tool to use changes everything.",
  openGraph: {
    title: "Bible Commentary Guide — Vine",
    description: "The best commentaries for every level and purpose — from devotional reading to academic exegesis. Commentaries are tools; knowing which tool to use changes everything.",
    images: ["/api/og?title=Bible+Commentary+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Commentary Guide — Vine",
    description: "The best commentaries for every level and purpose — from devotional reading to academic exegesis. Commentaries are tools; knowing which tool to use changes everything.",
    images: ["/api/og?title=Bible+Commentary+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
