import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Proverbs 3 Guide — Trust in the Lord with All Your Heart",
  description: "A verse-by-verse guide to Proverbs 3 — trusting the Lord with all your heart, honoring God with the firstfruits of your wealth, receiving his discipline as a father's love, finding wisdom as a tree of life, and not withholding good from your neighbor.",
  openGraph: { title: "Proverbs 3 Guide — Vine", description: "A guide to Proverbs 3 — trust in the Lord, honor him with your wealth, his loving discipline, finding wisdom, and doing good to your neighbor.", images: ["/api/og?title=Proverbs+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 3 Guide — Vine", description: "A verse-by-verse guide to Proverbs 3.", images: ["/api/og?title=Proverbs+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
