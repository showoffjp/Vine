import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 12 Guide - The Song of Salvation - Christian Study",
  description: "A deep study of Isaiah 12 - the song of thanksgiving that crowns the first major section of Isaiah. Explore the turning of God's anger to comfort, trust replacing fear, drawing water with joy from the wells of salvation, praise as mission to the nations, and the Holy One of Israel dwelling great in the midst of his people.",
  openGraph: {
    title: "Isaiah 12 Guide - The Song of Salvation - Vine",
    description: "Study Isaiah 12: the turning of God's wrath to comfort, trust over fear, the wells of salvation, missionary praise, and the Holy One of Israel in the midst of Zion.",
    images: ["/api/og?title=Isaiah+12+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 12 Guide - The Song of Salvation - Vine",
    description: "A deep guide to Isaiah 12 and the hymn of salvation that echoes the Song of the Sea and points to the wells of living water.",
    images: ["/api/og?title=Isaiah+12+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
