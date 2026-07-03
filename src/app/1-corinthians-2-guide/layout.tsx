import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Corinthians Chapter 2 Guide — Christian Study",
  description: "A deep guide to 1 Corinthians chapter 2 — Paul's deliberate choice to preach Christ crucified without rhetorical polish, the Spirit's revelation of God's secret wisdom, the natural man versus the spiritual person, and the stunning conclusion that believers have the mind of Christ.",
  openGraph: { title: "1 Corinthians 2 Guide — Vine", description: "A guide to 1 Corinthians 2 — the power of the cross over wisdom, the Spirit's revelation, and the mind of Christ.", images: ["/api/og?title=1+Corinthians+2+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 2 Guide — Vine", description: "A deep guide to 1 Corinthians chapter 2.", images: ["/api/og?title=1+Corinthians+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
