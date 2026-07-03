import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 14 Chapter Guide — Christian Study",
  description: "A deep guide to Matthew 14 — the death of John the Baptist, Jesus's compassion for the crowds, the feeding of five thousand with five loaves and two fish, and Jesus walking on the water as Peter steps out in faith.",
  openGraph: { title: "Matthew 14 Chapter Guide — Vine", description: "A guide to Matthew 14 — the feeding of the five thousand, walking on water, and the disciples worshiping the Son of God.", images: ["/api/og?title=Matthew+14+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 14 Chapter Guide — Vine", description: "A deep guide to Matthew 14 — miracles of provision and power over nature.", images: ["/api/og?title=Matthew+14+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
