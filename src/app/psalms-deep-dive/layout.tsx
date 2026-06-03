import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Psalms: A Deep Dive",
  description: "The Psalter is Israel's prayer book and the church's hymnal — 150 poems that cover every human emotion and teach us to speak honestly to God.",
  openGraph: {
    title: "The Psalms: A Deep Dive — Vine",
    description: "The Psalter is Israel's prayer book and the church's hymnal — 150 poems that cover every human emotion and teach us to speak honestly to God.",
    images: ["/api/og?title=The+Psalms%3A+A+Deep+Dive"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Psalms: A Deep Dive — Vine",
    description: "The Psalter is Israel's prayer book and the church's hymnal — 150 poems that cover every human emotion and teach us to speak honestly to God.",
    images: ["/api/og?title=The+Psalms%3A+A+Deep+Dive"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
