import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church History Guide",
  description: "A guide to church history — the major eras, figures, councils, movements, and what Christians today can learn from 2,000 years of the church.",
  openGraph: {
    title: "Church History Guide — Vine",
    description: "A guide to church history — the major eras, figures, councils, movements, and what Christians today can learn from 2,000 years of the church.",
    images: ["/api/og?title=Church+History+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church History Guide — Vine",
    description: "A guide to church history — the major eras, figures, councils, movements, and what Christians today can learn from 2,000 years of the church.",
    images: ["/api/og?title=Church+History+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
