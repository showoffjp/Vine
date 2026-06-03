import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devotional Journal",
  description: "Devotional Journal — explore Scripture, teaching, and practical guidance on Vine, a Christ-centered community for growing in faith.",
  openGraph: {
    title: "Devotional Journal — Vine",
    description: "Devotional Journal — explore Scripture, teaching, and practical guidance on Vine, a Christ-centered community for growing in faith.",
    images: ["/api/og?title=Devotional+Journal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devotional Journal — Vine",
    description: "Devotional Journal — explore Scripture, teaching, and practical guidance on Vine, a Christ-centered community for growing in faith.",
    images: ["/api/og?title=Devotional+Journal"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
