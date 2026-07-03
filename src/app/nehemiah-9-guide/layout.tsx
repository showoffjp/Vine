import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Nehemiah 9 Chapter Guide — Christian Study",
  description: "A deep guide to Nehemiah 9 — Israel's great prayer of confession, surveying history from Abraham through the Exodus, wilderness, and the land, celebrating God's steadfast love and covenant faithfulness through every cycle of rebellion.",
  openGraph: { title: "Nehemiah 9 Chapter Guide — Vine", description: "A guide to Nehemiah 9 — the Levites lead Israel in corporate confession and a sweeping review of God's faithfulness through history.", images: ["/api/og?title=Nehemiah+9+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Nehemiah 9 Chapter Guide — Vine", description: "A deep guide to Nehemiah 9 — Israel's great prayer of confession.", images: ["/api/og?title=Nehemiah+9+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
