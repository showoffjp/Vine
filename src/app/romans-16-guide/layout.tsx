import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Romans 16 Guide - Christian Study",
  description: "A deep guide to Romans chapter 16 - Paul's commendation of Phoebe, his greetings to the named saints of the early church, his warning against those who cause divisions, and the magnificent closing doxology to the only wise God through Jesus Christ.",
  openGraph: { title: "Romans 16 Guide - Vine", description: "A guide to Romans 16 - Phoebe and the greetings, the warning against divisions, the final greetings, and the doxology.", images: ["/api/og?title=Romans+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 16 Guide - Vine", description: "A deep guide to Romans chapter 16.", images: ["/api/og?title=Romans+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
