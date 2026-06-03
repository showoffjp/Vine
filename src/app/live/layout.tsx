import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Church",
  description: "Worship, pray, study, and connect with believers around the world — live, right now.",
  openGraph: {
    title: "Live Church — Vine",
    description: "Worship, pray, study, and connect with believers around the world — live, right now.",
    images: ["/api/og?title=Live+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Church — Vine",
    description: "Worship, pray, study, and connect with believers around the world — live, right now.",
    images: ["/api/og?title=Live+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
