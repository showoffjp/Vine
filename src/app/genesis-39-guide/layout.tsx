import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 39 Guide — Christian Study",
  description: "A deep guide to Genesis 39 — Joseph in Egypt, the LORD's favor on Joseph in Potiphar's house, Potiphar's wife's false accusation, and Joseph's imprisonment with God's steadfast love still upon him.",
  openGraph: { title: "Genesis 39 Guide — Vine", description: "A guide to Genesis 39 — Joseph sold to Potiphar, the LORD's presence, resisting temptation, false accusation, and God's faithfulness in prison.", images: ["/api/og?title=Genesis+39+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 39 Guide — Vine", description: "A deep guide to Genesis 39 — Joseph, Potiphar, and the steadfast love of God.", images: ["/api/og?title=Genesis+39+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
