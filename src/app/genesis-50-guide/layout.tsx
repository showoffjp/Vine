import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 50 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 50 — Jacob's death and mourning, the great procession to Machpelah, the brothers' fear of Joseph's revenge, Joseph's declaration that God intended it for good, and his dying faith in the promise of the land.",
  openGraph: { title: "Genesis 50 Chapter Guide — Vine", description: "A guide to Genesis 50 — Jacob's death, Joseph's forgiveness, and the declaration that God intended it for good.", images: ["/api/og?title=Genesis+50+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 50 Chapter Guide — Vine", description: "A deep guide to Genesis 50 — Joseph forgives his brothers and trusts God's providence.", images: ["/api/og?title=Genesis+50+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
