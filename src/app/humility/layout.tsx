import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Virtue of Humility",
  description: "C.S. Lewis called pride the great sin — the root from which every other sin grows. And yet humility, its remedy, is perhaps the most misunderstood virtue in the Christian life.",
  openGraph: {
    title: "The Virtue of Humility — Vine",
    description: "C.S. Lewis called pride the great sin — the root from which every other sin grows. And yet humility, its remedy, is perhaps the most misunderstood virtue in the Christian life.",
    images: ["/api/og?title=The+Virtue+of+Humility"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Virtue of Humility — Vine",
    description: "C.S. Lewis called pride the great sin — the root from which every other sin grows. And yet humility, its remedy, is perhaps the most misunderstood virtue in the Christian life.",
    images: ["/api/og?title=The+Virtue+of+Humility"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
