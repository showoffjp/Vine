import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Love",
  description: "Love and the Christian faith - the four loves, agape as self-giving love, God is love, the great commandment, the love chapter of 1 Corinthians 13, loving your enemies, and how love is the mark of the Christian.",
  openGraph: { title: "Christian Guide to Love - Vine", description: "Love and faith - the four loves, agape, God is love, the great commandment, 1 Corinthians 13, and loving enemies.", images: ["/api/og?title=Christian+Love"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Love - Vine", description: "Love and the Christian faith.", images: ["/api/og?title=Christian+Love"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
