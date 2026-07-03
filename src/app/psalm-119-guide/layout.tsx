import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 119 Chapter Guide — Christian Study",
  description: "A deep guide to Psalm 119 — the longest chapter in the Bible and an acrostic poem celebrating God's Word as a lamp, a delight sweeter than honey, an eternal anchor fixed in the heavens, and a faithful companion through affliction and growth.",
  openGraph: { title: "Psalm 119 Chapter Guide — Vine", description: "A guide to Psalm 119 — God's Word as lamp, delight, eternal anchor, and companion through every season of life.", images: ["/api/og?title=Psalm+119+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 119 Chapter Guide — Vine", description: "A deep guide to Psalm 119 — the longest chapter in the Bible.", images: ["/api/og?title=Psalm+119+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
