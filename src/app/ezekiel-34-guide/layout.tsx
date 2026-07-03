import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Ezekiel 34 Guide - Christian Study",
  description: "A deep guide to Ezekiel 34 - the great shepherds oracle, the woe against the false shepherds of Israel, the Lord's promise to seek and gather his scattered sheep, and the covenant of peace under one shepherd, my servant David.",
  openGraph: { title: "Ezekiel 34 Guide - Vine", description: "A guide to Ezekiel 34 - the shepherds oracle and the covenant of peace.", images: ["/api/og?title=Ezekiel+34+Guide"] },
  twitter: { card: "summary_large_image", title: "Ezekiel 34 Guide - Vine", description: "A deep guide to Ezekiel 34.", images: ["/api/og?title=Ezekiel+34+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
