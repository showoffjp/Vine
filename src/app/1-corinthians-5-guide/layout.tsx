import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Corinthians 5 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 5 - Paul's confrontation of tolerated immorality in the Corinthian church, his command of redemptive discipline, the imagery of leaven and Christ our Passover lamb, and the distinction between judging those inside the church and leaving the world to God.",
  openGraph: { title: "1 Corinthians 5 Guide - Vine", description: "A guide to 1 Corinthians 5 - tolerated sin, church discipline, the old leaven, and judging those inside the church.", images: ["/api/og?title=1+Corinthians+5+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 5 Guide - Vine", description: "A deep guide to 1 Corinthians 5.", images: ["/api/og?title=1+Corinthians+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
