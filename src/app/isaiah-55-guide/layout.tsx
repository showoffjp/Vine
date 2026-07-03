import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 55 Guide — Come Everyone Who Thirsts — Christian Study",
  description: "A deep guide to Isaiah 55 — God's free invitation to come to the waters of grace without money or price, the call to seek the Lord while he may be found, the assurance that his ways are higher than ours, and the promise that his word will never return empty but will accomplish everything he sends it to do.",
  openGraph: { title: "Isaiah 55 Guide — Come Everyone Who Thirsts — Vine", description: "A guide to Isaiah 55 — the great invitation to come to the waters, the higher ways of God, and the word that always accomplishes God's purpose.", images: ["/api/og?title=Isaiah+55+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 55 Guide — Come Everyone Who Thirsts — Vine", description: "A deep guide to Isaiah 55 and God's free invitation to drink of living water.", images: ["/api/og?title=Isaiah+55+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
