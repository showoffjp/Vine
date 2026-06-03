import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily",
  description: "9 more days until your 30-day milestone!",
  openGraph: {
    title: "Daily — Vine",
    description: "9 more days until your 30-day milestone!",
    images: ["/api/og?title=Daily"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily — Vine",
    description: "9 more days until your 30-day milestone!",
    images: ["/api/og?title=Daily"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
