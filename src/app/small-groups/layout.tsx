import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leading Your Group Well",
  description: "Small groups are where the church becomes real — not a building you attend but a community you belong to. Study guides, ice breakers, leader wisdom, and voices from those who have thought deepest a…",
  openGraph: {
    title: "Leading Your Group Well — Vine",
    description: "Small groups are where the church becomes real — not a building you attend but a community you belong to. Study guides, ice breakers, leader wisdom, and voices from those who have thought deepest a…",
    images: ["/api/og?title=Leading+Your+Group+Well"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading Your Group Well — Vine",
    description: "Small groups are where the church becomes real — not a building you attend but a community you belong to. Study guides, ice breakers, leader wisdom, and voices from those who have thought deepest a…",
    images: ["/api/og?title=Leading+Your+Group+Well"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
