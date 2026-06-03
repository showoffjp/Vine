import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Formation",
  description: "The ancient process of becoming more like Jesus — not by trying harder, but by training well. A comprehensive guide to the tradition, teachers, practices, and stages of Christian transformation.",
  openGraph: {
    title: "Spiritual Formation — Vine",
    description: "The ancient process of becoming more like Jesus — not by trying harder, but by training well. A comprehensive guide to the tradition, teachers, practices, and stages of Christian transformation.",
    images: ["/api/og?title=Spiritual+Formation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Formation — Vine",
    description: "The ancient process of becoming more like Jesus — not by trying harder, but by training well. A comprehensive guide to the tradition, teachers, practices, and stages of Christian transformation.",
    images: ["/api/og?title=Spiritual+Formation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
