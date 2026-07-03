import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Exodus 32 Chapter Guide — The Golden Calf",
  description: "A deep guide to Exodus 32 — Israel's great sin of the golden calf at the foot of Sinai, God's burning anger, Moses's bold intercession, the breaking of the tablets, judgment through the Levites, and Moses pleading for atonement.",
  openGraph: { title: "Exodus 32 Chapter Guide — Vine", description: "A guide to Exodus 32 — the golden calf, God's anger, Moses's intercession, the broken tablets, and the Levites' zeal.", images: ["/api/og?title=Exodus+32+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Exodus 32 Chapter Guide — Vine", description: "A deep guide to Exodus 32 — the golden calf and Moses's intercession.", images: ["/api/og?title=Exodus+32+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
