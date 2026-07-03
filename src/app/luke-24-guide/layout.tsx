import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 24 Guide — The Resurrection and the Road to Emmaus",
  description: "A deep Christian study guide to Luke 24 — the empty tomb, the road to Emmaus, the breaking of bread, the opening of the Scriptures, and the ascension. Explore how the risen Christ revealed himself as the fulfillment of all that Moses, the Prophets, and the Psalms had written.",
  openGraph: { title: "Luke 24 Guide — The Vine", description: "A guide to Luke 24 — the empty tomb, Emmaus, the breaking of bread, and the ascension.", images: ["/api/og?title=Luke+24+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 24 Guide — The Vine", description: "A deep guide to Luke 24 — resurrection, Emmaus, and the opening of the Scriptures.", images: ["/api/og?title=Luke+24+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
