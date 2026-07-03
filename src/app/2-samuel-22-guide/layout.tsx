import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Samuel 22 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Samuel 22 — David's Song of Praise celebrating God as Rock, Fortress, and Deliverer. Explore the theophany, God's righteousness, David's victories, and the Messianic themes pointing to Christ.",
  openGraph: { title: "2 Samuel 22 Chapter Guide — Vine", description: "A guide to 2 Samuel 22 — David's song of thanksgiving for God's deliverance from Saul and all his enemies.", images: ["/api/og?title=2+Samuel+22+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 22 Chapter Guide — Vine", description: "A deep guide to 2 Samuel 22 — David's Song of Praise.", images: ["/api/og?title=2+Samuel+22+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
