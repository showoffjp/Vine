import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovering Your Calling — Vine",
  description: "Where your deep gladness meets the world's deep hunger. A theological and practical guide to general and specific calling, vocation as worship, discerning God's will, and calling in every season of life.",
  openGraph: {
    title: "Discovering Your Calling — Vine",
    description: "Where your deep gladness meets the world's deep hunger. A theological and practical guide to general and specific calling, vocation as worship, discerning God's will, and calling in every season of life.",
    images: ["/api/og?title=Discovering+Your+Calling"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discovering Your Calling — Vine",
    description: "Where your deep gladness meets the world's deep hunger. A theological and practical guide to general and specific calling, vocation as worship, discerning God's will, and calling in every season of life.",
    images: ["/api/og?title=Discovering+Your+Calling"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
