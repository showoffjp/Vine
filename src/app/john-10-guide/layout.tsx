import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 10 Chapter Guide — Christian Study",
  description: "A deep guide to John 10 — Jesus the Good Shepherd who lays down his life for the sheep, calls them by name, declares himself the gate, brings other sheep into one flock, and promises that no one can snatch them from his hand or the Father's hand.",
  openGraph: { title: "John 10 Chapter Guide — Vine", description: "A guide to John 10 — Jesus as the Good Shepherd, the gate for the sheep, the one flock, and eternal security in his hand.", images: ["/api/og?title=John+10+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "John 10 Chapter Guide — Vine", description: "A deep guide to John 10 — Jesus the Good Shepherd who lays down his life and holds his sheep in an unbreakable grip.", images: ["/api/og?title=John+10+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
