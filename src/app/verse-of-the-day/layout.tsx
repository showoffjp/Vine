import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "God's Word. Every Morning.",
  description: "Meditate, pray, and memorize Scripture that anchors the soul — topical verses, weekly plans, and memorization guides.",
  openGraph: {
    title: "God's Word. Every Morning. — Vine",
    description: "Meditate, pray, and memorize Scripture that anchors the soul — topical verses, weekly plans, and memorization guides.",
    images: ["/api/og?title=God's+Word.+Every+Morning."],
  },
  twitter: {
    card: "summary_large_image",
    title: "God's Word. Every Morning. — Vine",
    description: "Meditate, pray, and memorize Scripture that anchors the soul — topical verses, weekly plans, and memorization guides.",
    images: ["/api/og?title=God's+Word.+Every+Morning."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
