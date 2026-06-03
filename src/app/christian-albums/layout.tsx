import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential Christian Albums",
  description: "From Chris Tomlin to Lecrae, Bethel to Sovereign Grace — the albums that have defined Christian worship, gospel, and hip-hop from 2000 to today.",
  openGraph: {
    title: "Essential Christian Albums — Vine",
    description: "From Chris Tomlin to Lecrae, Bethel to Sovereign Grace — the albums that have defined Christian worship, gospel, and hip-hop from 2000 to today.",
    images: ["/api/og?title=Essential+Christian+Albums"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Christian Albums — Vine",
    description: "From Chris Tomlin to Lecrae, Bethel to Sovereign Grace — the albums that have defined Christian worship, gospel, and hip-hop from 2000 to today.",
    images: ["/api/og?title=Essential+Christian+Albums"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
