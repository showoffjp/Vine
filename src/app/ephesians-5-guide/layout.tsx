import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Ephesians 5 Chapter Guide – Walk in Love, Marriage and the Gospel | The Vine",
  description: "A deep guide to Ephesians 5 — the call to walk in love as Christ loved us, walk in light exposing darkness, be filled with the Spirit in song and thanksgiving, and the profound mystery of Christian marriage reflecting Christ and the church.",
  openGraph: { title: "Ephesians 5 Chapter Guide – The Vine", description: "Walk in love, walk in light, be filled with the Spirit, and the great mystery of marriage in Ephesians 5.", images: ["/api/og?title=Ephesians+5+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Ephesians 5 Chapter Guide – The Vine", description: "A guide to Ephesians 5 — love, light, Spirit, and marriage as the gospel.", images: ["/api/og?title=Ephesians+5+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
