import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 15 Chapter Guide — Christian Study",
  description: "A deep guide to Acts 15 — the Jerusalem Council, the controversy over circumcision and salvation, Peter's testimony that God made no distinction, James's ruling from Amos, the letter sent to Gentile churches, and the split between Paul and Barnabas over John Mark.",
  openGraph: { title: "Acts 15 Chapter Guide — Vine", description: "A guide to Acts 15 — the Jerusalem Council, grace alone, and the Gentile mission.", images: ["/api/og?title=Acts+15+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 15 Chapter Guide — Vine", description: "A deep guide to Acts 15.", images: ["/api/og?title=Acts+15+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
