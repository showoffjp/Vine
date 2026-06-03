import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "God’s Promises",
  description: "“Every promise is yes in Christ Jesus” — 2 Corinthians 1:20",
  openGraph: {
    title: "God’s Promises — Vine",
    description: "“Every promise is yes in Christ Jesus” — 2 Corinthians 1:20",
    images: ["/api/og?title=God%E2%80%99s+Promises"],
  },
  twitter: {
    card: "summary_large_image",
    title: "God’s Promises — Vine",
    description: "“Every promise is yes in Christ Jesus” — 2 Corinthians 1:20",
    images: ["/api/og?title=God%E2%80%99s+Promises"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
