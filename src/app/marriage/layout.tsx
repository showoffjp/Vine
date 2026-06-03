import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Marriage",
  description: "Marriage as covenant, not contract. A resource for building, strengthening, and sustaining the marriage God designed for his glory and your flourishing.",
  openGraph: {
    title: "Christian Marriage — Vine",
    description: "Marriage as covenant, not contract. A resource for building, strengthening, and sustaining the marriage God designed for his glory and your flourishing.",
    images: ["/api/og?title=Christian+Marriage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Marriage — Vine",
    description: "Marriage as covenant, not contract. A resource for building, strengthening, and sustaining the marriage God designed for his glory and your flourishing.",
    images: ["/api/og?title=Christian+Marriage"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
