import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 12 Guide - Christian Study",
  description: "A deep guide to Luke chapter 12 - the warning against the leaven of hypocrisy and the fear of man, the Parable of the Rich Fool, the call to trust the Father who feeds the ravens and clothes the lilies, watchfulness for the Master's return, and the division the gospel brings.",
  openGraph: { title: "Luke 12 Guide - Vine", description: "A guide to Luke 12 - fear God not man, the rich fool, anxiety and trust, watchfulness and division.", images: ["/api/og?title=Luke+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 12 Guide - Vine", description: "A deep guide to Luke chapter 12.", images: ["/api/og?title=Luke+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
