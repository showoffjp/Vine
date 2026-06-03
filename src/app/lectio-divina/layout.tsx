import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lectio Divina",
  description: "Sacred reading — a 1,500-year-old practice of slowly reading, meditating on, praying, and contemplating Scripture. Not study. Encounter.",
  openGraph: {
    title: "Lectio Divina — Vine",
    description: "Sacred reading — a 1,500-year-old practice of slowly reading, meditating on, praying, and contemplating Scripture. Not study. Encounter.",
    images: ["/api/og?title=Lectio+Divina"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lectio Divina — Vine",
    description: "Sacred reading — a 1,500-year-old practice of slowly reading, meditating on, praying, and contemplating Scripture. Not study. Encounter.",
    images: ["/api/og?title=Lectio+Divina"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
