import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Friendship — Vine",
  description: "Friendship is not a luxury but a means of grace. A theological and practical guide to spiritual friendship — David and Jonathan, the friendship of Jesus, the wisdom of Proverbs, and cultivating deep friendship as an adult.",
  openGraph: {
    title: "Spiritual Friendship — Vine",
    description: "Friendship is not a luxury but a means of grace. A theological and practical guide to spiritual friendship — David and Jonathan, the friendship of Jesus, the wisdom of Proverbs, and cultivating deep friendship as an adult.",
    images: ["/api/og?title=Spiritual+Friendship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Friendship — Vine",
    description: "Friendship is not a luxury but a means of grace. A theological and practical guide to spiritual friendship — David and Jonathan, the friendship of Jesus, the wisdom of Proverbs, and cultivating deep friendship as an adult.",
    images: ["/api/og?title=Spiritual+Friendship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
