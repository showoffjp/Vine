import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Christian YouTube Channels",
  description: "The best channels for theology, preaching, Bible study, apologetics, and worship — curated by quality, not subscriber count. Hours of free, world-class Christian content.",
  openGraph: {
    title: "Top Christian YouTube Channels — Vine",
    description: "The best channels for theology, preaching, Bible study, apologetics, and worship — curated by quality, not subscriber count. Hours of free, world-class Christian content.",
    images: ["/api/og?title=Top+Christian+YouTube+Channels"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Christian YouTube Channels — Vine",
    description: "The best channels for theology, preaching, Bible study, apologetics, and worship — curated by quality, not subscriber count. Hours of free, world-class Christian content.",
    images: ["/api/og?title=Top+Christian+YouTube+Channels"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
