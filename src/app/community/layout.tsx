import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your People",
  description: "Join interest-based circles where Christians gather around shared passions — theology, parenting, finance, worship, mental health, and more. Your tribe is already here.",
  openGraph: {
    title: "Find Your People — Vine",
    description: "Join interest-based circles where Christians gather around shared passions — theology, parenting, finance, worship, mental health, and more. Your tribe is already here.",
    images: ["/api/og?title=Find+Your+People"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your People — Vine",
    description: "Join interest-based circles where Christians gather around shared passions — theology, parenting, finance, worship, mental health, and more. Your tribe is already here.",
    images: ["/api/og?title=Find+Your+People"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
