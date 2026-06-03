import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Great Hymns of the Faith",
  description: "Twelve centuries of the church singing her faith — from Luther's defiant fortress to the modern hymn revival. Behind every great hymn is a story of grace, grief, or glory. Here are the songs that h…",
  openGraph: {
    title: "The Great Hymns of the Faith — Vine",
    description: "Twelve centuries of the church singing her faith — from Luther's defiant fortress to the modern hymn revival. Behind every great hymn is a story of grace, grief, or glory. Here are the songs that h…",
    images: ["/api/og?title=The+Great+Hymns+of+the+Faith"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Hymns of the Faith — Vine",
    description: "Twelve centuries of the church singing her faith — from Luther's defiant fortress to the modern hymn revival. Behind every great hymn is a story of grace, grief, or glory. Here are the songs that h…",
    images: ["/api/og?title=The+Great+Hymns+of+the+Faith"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
