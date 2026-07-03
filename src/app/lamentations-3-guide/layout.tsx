import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Lamentations 3 Guide — Great Is Your Faithfulness — Christian Study",
  description: "A deep guide to Lamentations 3 — the man who has seen affliction descending into the darkest grief, the pivotal turn to hope at the center of the chapter, the declaration that God's steadfast love never ceases and his mercies are new every morning, and the meaning of the Lord as our portion even when everything else is lost.",
  openGraph: { title: "Lamentations 3 Guide — Great Is Your Faithfulness — Vine", description: "Explore Lamentations 3: raw grief over the fall of Jerusalem, the turn to hope in God's steadfast love, new mercies every morning, and finding the Lord as your portion in the deepest loss.", images: ["/api/og?title=Lamentations+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Lamentations 3 Guide — Great Is Your Faithfulness — Vine", description: "A guide to Lamentations 3: grief, hope, and the steadfast love that never ceases.", images: ["/api/og?title=Lamentations+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
