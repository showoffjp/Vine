import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 10 Guide - Christian Study",
  description: "A deep guide to 1 Kings chapter 10 - the Queen of Sheba's visit to test Solomon's God-given wisdom, the staggering catalog of gold, the great ivory throne, horses and chariots and trade, and the quiet warning of Deuteronomy 17 that foreshadows Solomon's decline.",
  openGraph: { title: "1 Kings 10 Guide - Vine", description: "A guide to 1 Kings 10 - the Queen of Sheba, Solomon's gold and the great throne, horses and trade, and glory at its height.", images: ["/api/og?title=1+Kings+10+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 10 Guide - Vine", description: "A deep guide to 1 Kings chapter 10.", images: ["/api/og?title=1+Kings+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
