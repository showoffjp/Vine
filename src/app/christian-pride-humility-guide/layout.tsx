import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Pride and Humility",
  description: "Pride and humility in the Christian faith - why pride is called the root of all sin, the humility of Christ, the difference between healthy self-respect and sinful pride, how God opposes the proud, and the path to true humility.",
  openGraph: { title: "Christian Guide to Pride and Humility - Vine", description: "Pride and humility - the root of all sin, the humility of Christ, how God opposes the proud, and the path to true humility.", images: ["/api/og?title=Pride+and+Humility"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Pride and Humility - Vine", description: "Pride and humility in the Christian faith.", images: ["/api/og?title=Pride+and+Humility"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
