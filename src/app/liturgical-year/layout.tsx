import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Liturgical Year",
  description: "The church marks time differently. The liturgical year is a year-long walk through the entire gospel story — from Advent longing through Easter joy and Pentecost fire — forming a people who inhabit…",
  openGraph: {
    title: "The Liturgical Year — Vine",
    description: "The church marks time differently. The liturgical year is a year-long walk through the entire gospel story — from Advent longing through Easter joy and Pentecost fire — forming a people who inhabit…",
    images: ["/api/og?title=The+Liturgical+Year"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Liturgical Year — Vine",
    description: "The church marks time differently. The liturgical year is a year-long walk through the entire gospel story — from Advent longing through Easter joy and Pentecost fire — forming a people who inhabit…",
    images: ["/api/og?title=The+Liturgical+Year"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
