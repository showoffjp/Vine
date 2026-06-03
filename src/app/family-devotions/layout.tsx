import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Devotions",
  description: "The most important spiritual formation happens at home. Consistent family devotions — even simple, imperfect ones — build faith across generations. Here is how to start and sustain them.",
  openGraph: {
    title: "Family Devotions — Vine",
    description: "The most important spiritual formation happens at home. Consistent family devotions — even simple, imperfect ones — build faith across generations. Here is how to start and sustain them.",
    images: ["/api/og?title=Family+Devotions"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Devotions — Vine",
    description: "The most important spiritual formation happens at home. Consistent family devotions — even simple, imperfect ones — build faith across generations. Here is how to start and sustain them.",
    images: ["/api/og?title=Family+Devotions"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
