import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Devotional Classics",
  description: "The books that have formed Christian souls across centuries — from Augustine’s restless heart to Bonhoeffer’s costly grace. These are the indispensable texts of the Christian inner life.",
  openGraph: {
    title: "Christian Devotional Classics — Vine",
    description: "The books that have formed Christian souls across centuries — from Augustine’s restless heart to Bonhoeffer’s costly grace. These are the indispensable texts of the Christian inner life.",
    images: ["/api/og?title=Christian+Devotional+Classics"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Devotional Classics — Vine",
    description: "The books that have formed Christian souls across centuries — from Augustine’s restless heart to Bonhoeffer’s costly grace. These are the indispensable texts of the Christian inner life.",
    images: ["/api/og?title=Christian+Devotional+Classics"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
