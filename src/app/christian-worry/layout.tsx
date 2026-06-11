import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worry & the Christian — Vine",
  description: "Matthew 6, Philippians 4, and the practice of prayer as antidote to anxiety. A theological and practical guide to replacing worry with trust in God's sovereignty.",
  openGraph: {
    title: "Worry & the Christian — Vine",
    description: "Matthew 6, Philippians 4, and the practice of prayer as antidote to anxiety. A theological and practical guide to replacing worry with trust in God's sovereignty.",
    images: ["/api/og?title=Worry+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worry & the Christian — Vine",
    description: "Matthew 6, Philippians 4, and the practice of prayer as antidote to anxiety. A theological and practical guide to replacing worry with trust in God's sovereignty.",
    images: ["/api/og?title=Worry+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
