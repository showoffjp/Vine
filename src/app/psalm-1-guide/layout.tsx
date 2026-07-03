import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 1 Guide — Christian Study",
  description: "A deep guide to Psalm 1 — the gateway psalm of the two ways: the blessed man who delights in the law of the Lord, the tree planted by streams of water, the wicked as chaff the wind drives away, and the Lord who knows the way of the righteous while the way of the wicked perishes.",
  openGraph: { title: "Psalm 1 Guide — Vine", description: "A guide to Psalm 1 — the blessed man, the tree by the water, the chaff, and the two ways.", images: ["/api/og?title=Psalm+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 1 Guide — Vine", description: "A deep guide to Psalm 1, the gateway psalm of the two ways.", images: ["/api/og?title=Psalm+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
