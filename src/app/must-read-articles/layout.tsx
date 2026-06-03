import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Must-Read Christian Articles",
  description: "The articles that have shaped conversations, changed minds, and helped Christians navigate faith. Curated from TGC, Desiring God, Christianity Today, and more — each one worth your time.",
  openGraph: {
    title: "Must-Read Christian Articles — Vine",
    description: "The articles that have shaped conversations, changed minds, and helped Christians navigate faith. Curated from TGC, Desiring God, Christianity Today, and more — each one worth your time.",
    images: ["/api/og?title=Must-Read+Christian+Articles"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Must-Read Christian Articles — Vine",
    description: "The articles that have shaped conversations, changed minds, and helped Christians navigate faith. Curated from TGC, Desiring God, Christianity Today, and more — each one worth your time.",
    images: ["/api/og?title=Must-Read+Christian+Articles"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
