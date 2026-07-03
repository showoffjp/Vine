import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 3 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Kings 3 — Solomon at Gibeon, the dream in which God says 'Ask what I shall give you,' Solomon's request for a wise and discerning heart, God's generous response, and the famous judgment of the two mothers that demonstrated the wisdom of God given to Israel's king.",
  openGraph: { title: "1 Kings 3 Chapter Guide — Vine", description: "A guide to 1 Kings 3 — Solomon's dream at Gibeon, asking for wisdom, and the judgment of the two mothers.", images: ["/api/og?title=1+Kings+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 3 Chapter Guide — Vine", description: "A deep guide to 1 Kings 3 — Ask what I shall give you.", images: ["/api/og?title=1+Kings+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
