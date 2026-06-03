import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile — explore Scripture, teaching, and practical guidance on Vine, a Christ-centered community for growing in faith.",
  openGraph: {
    title: "Profile — Vine",
    description: "Profile — explore Scripture, teaching, and practical guidance on Vine, a Christ-centered community for growing in faith.",
    images: ["/api/og?title=Profile"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile — Vine",
    description: "Profile — explore Scripture, teaching, and practical guidance on Vine, a Christ-centered community for growing in faith.",
    images: ["/api/og?title=Profile"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
