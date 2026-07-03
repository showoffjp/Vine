import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 14 Guide - Christian Study",
  description: "A deep guide to Luke chapter 14 - the Sabbath healing of the man with dropsy, the teaching on humility and true hospitality, the Parable of the Great Banquet, and the radical cost of discipleship in counting the cost and renouncing all.",
  openGraph: { title: "Luke 14 Guide - Vine", description: "A guide to Luke 14 - Sabbath healing and humility, the Parable of the Great Banquet, and counting the cost of discipleship.", images: ["/api/og?title=Luke+14+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 14 Guide - Vine", description: "A deep guide to Luke chapter 14.", images: ["/api/og?title=Luke+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
