import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Romans 15 Guide - Christian Study",
  description: "A deep guide to Romans chapter 15 - the strong bearing with the weak after the example of Christ who did not please himself, the inclusion of Jew and Gentile in one worshiping people, and Paul's mission to preach where Christ has not been named on the way to Spain.",
  openGraph: { title: "Romans 15 Guide - Vine", description: "A guide to Romans 15 - bear with the weak, welcome one another, Christ for Jew and Gentile, and Paul's mission and travel plans.", images: ["/api/og?title=Romans+15+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 15 Guide - Vine", description: "A deep guide to Romans chapter 15.", images: ["/api/og?title=Romans+15+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
