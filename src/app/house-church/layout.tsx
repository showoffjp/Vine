import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Church in Your Home",
  description: "The first Christians gathered in homes. Simple, participatory, relational gatherings centered on Word, prayer, and table are not a lesser form of church — they may be its purest expression.",
  openGraph: {
    title: "The Church in Your Home — Vine",
    description: "The first Christians gathered in homes. Simple, participatory, relational gatherings centered on Word, prayer, and table are not a lesser form of church — they may be its purest expression.",
    images: ["/api/og?title=The+Church+in+Your+Home"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Church in Your Home — Vine",
    description: "The first Christians gathered in homes. Simple, participatory, relational gatherings centered on Word, prayer, and table are not a lesser form of church — they may be its purest expression.",
    images: ["/api/og?title=The+Church+in+Your+Home"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
