import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overcoming Pride — Vine",
  description: "Pride is the original sin &mdash; the root of every fall. A theological and practical guide to identifying pride in ministry, relationships, and the self, and finding the path of repentance and humility.",
  openGraph: {
    title: "Overcoming Pride — Vine",
    description: "Pride is the original sin &mdash; the root of every fall. A theological and practical guide to identifying pride in ministry, relationships, and the self, and finding the path of repentance and humility.",
    images: ["/api/og?title=Overcoming+Pride"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overcoming Pride — Vine",
    description: "Pride is the original sin &mdash; the root of every fall. A theological and practical guide to identifying pride in ministry, relationships, and the self, and finding the path of repentance and humility.",
    images: ["/api/og?title=Overcoming+Pride"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
