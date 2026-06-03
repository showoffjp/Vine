import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advent Guide",
  description: "Advent means \"coming.\" Four weeks of anticipation, longing, and preparation — celebrating both the first coming of Christ and awaiting the second. The season reclaims the meaning of waiting.",
  openGraph: {
    title: "Advent Guide — Vine",
    description: "Advent means \"coming.\" Four weeks of anticipation, longing, and preparation — celebrating both the first coming of Christ and awaiting the second. The season reclaims the meaning of waiting.",
    images: ["/api/og?title=Advent+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advent Guide — Vine",
    description: "Advent means \"coming.\" Four weeks of anticipation, longing, and preparation — celebrating both the first coming of Christ and awaiting the second. The season reclaims the meaning of waiting.",
    images: ["/api/og?title=Advent+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
