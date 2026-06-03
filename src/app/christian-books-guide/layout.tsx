import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential Christian Books",
  description: "The books that have shaped Christianity's most faithful readers — curated by category, with real descriptions and where to get them. No filler, no paid placements.",
  openGraph: {
    title: "Essential Christian Books — Vine",
    description: "The books that have shaped Christianity's most faithful readers — curated by category, with real descriptions and where to get them. No filler, no paid placements.",
    images: ["/api/og?title=Essential+Christian+Books"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Christian Books — Vine",
    description: "The books that have shaped Christianity's most faithful readers — curated by category, with real descriptions and where to get them. No filler, no paid placements.",
    images: ["/api/og?title=Essential+Christian+Books"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
