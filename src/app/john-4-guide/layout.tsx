import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 4 Chapter Guide — Christian Study",
  description: "A deep guide to John 4 — Jesus and the Samaritan woman at Jacob's Well, the gift of living water, worship in spirit and truth, the disciples and the harvest fields, and the healing of the royal official's son.",
  openGraph: { title: "John 4 Chapter Guide — Vine", description: "A guide to John 4 — living water, the Samaritan woman, worship in spirit and truth, and the healing of the official's son.", images: ["/api/og?title=John+4+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "John 4 Chapter Guide — Vine", description: "A deep guide to John 4 — Jesus at Jacob's Well, living water, and true worship.", images: ["/api/og?title=John+4+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
