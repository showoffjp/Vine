import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 1 Chapter Guide – Genealogy, Virgin Birth, Immanuel | The Vine",
  description: "A deep guide to Matthew 1 — the three-part genealogy from Abraham through David to Jesus, the five women of grace in the bloodline, Joseph’s dream and the virgin birth of Christ, and the fulfillment of Isaiah’s Immanuel prophecy: God with us.",
  openGraph: { title: "Matthew 1 Chapter Guide – Genealogy, Virgin Birth, Immanuel | The Vine", description: "Explore Matthew 1: the genealogy from Abraham to Jesus, the virgin birth, Joseph’s dream, and the Immanuel prophecy fulfilled.", images: ["/api/og?title=Matthew+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 1 Chapter Guide | The Vine", description: "A guide to Matthew 1 — genealogy, virgin birth, and Immanuel.", images: ["/api/og?title=Matthew+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
