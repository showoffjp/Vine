import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Gentleness",
  description: "Gentleness and the Christian faith - the fruit of the Spirit, the gentleness of Jesus, strength under control, gentleness in correction and conflict, and the beauty of a gentle and quiet spirit.",
  openGraph: { title: "Christian Guide to Gentleness - Vine", description: "Gentleness - the fruit of the Spirit, the gentleness of Jesus, strength under control, and gentleness in conflict.", images: ["/api/og?title=Christian+Gentleness"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Gentleness - Vine", description: "Gentleness and the Christian faith.", images: ["/api/og?title=Christian+Gentleness"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
