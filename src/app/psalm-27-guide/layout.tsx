import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 27 Guide — The Lord Is My Light and My Salvation",
  description: "A verse-by-verse guide to Psalm 27 — the Lord as light, salvation, and stronghold; the one thing David asks; the shelter that hides us in the day of trouble; the cry to seek God's face; and the closing call to wait for the Lord and take courage.",
  openGraph: { title: "Psalm 27 Guide — Vine", description: "A guide to Psalm 27 — the Lord my light and salvation, one thing I have asked, his shelter in trouble, seeking his face, and waiting for the Lord.", images: ["/api/og?title=Psalm+27+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 27 Guide — Vine", description: "A verse-by-verse guide to Psalm 27.", images: ["/api/og?title=Psalm+27+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
