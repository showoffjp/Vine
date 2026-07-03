import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Peter 2 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Peter 2 — coming to the Living Stone, believers as living stones built into a spiritual house, the royal priesthood, a holy nation, God's special possession, honorable conduct among unbelievers, and Christ's example as the Suffering Servant.",
  openGraph: { title: "1 Peter 2 Chapter Guide — Vine", description: "A guide to 1 Peter 2 — the Living Stone, royal priesthood, holy nation, and Christ's example in suffering.", images: ["/api/og?title=1+Peter+2+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Peter 2 Chapter Guide — Vine", description: "A deep guide to 1 Peter 2 — living stones, royal priesthood, and the Suffering Servant.", images: ["/api/og?title=1+Peter+2+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
