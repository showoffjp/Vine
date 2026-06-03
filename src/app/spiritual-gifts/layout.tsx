import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Gifts",
  description: "A comprehensive guide to understanding, identifying, and deploying the gifts of the Holy Spirit — from theology to practice, including the cessationism debate.",
  openGraph: {
    title: "Spiritual Gifts — Vine",
    description: "A comprehensive guide to understanding, identifying, and deploying the gifts of the Holy Spirit — from theology to practice, including the cessationism debate.",
    images: ["/api/og?title=Spiritual+Gifts"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Gifts — Vine",
    description: "A comprehensive guide to understanding, identifying, and deploying the gifts of the Holy Spirit — from theology to practice, including the cessationism debate.",
    images: ["/api/og?title=Spiritual+Gifts"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
