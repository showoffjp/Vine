import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 12 Guide - Christian Study",
  description: "A deep guide to 1 Kings chapter 12 - the division of the kingdom, Rehoboam's folly in rejecting wise counsel, the revolt of the northern tribes under Jeroboam, and the golden calves at Bethel and Dan.",
  openGraph: { title: "1 Kings 12 Guide - Vine", description: "A guide to 1 Kings 12 - the divided kingdom, Rehoboam's folly, and Jeroboam's golden calves.", images: ["/api/og?title=1+Kings+12+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 12 Guide - Vine", description: "A deep guide to 1 Kings chapter 12.", images: ["/api/og?title=1+Kings+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
