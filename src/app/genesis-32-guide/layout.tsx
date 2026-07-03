import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 32 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 32 — Jacob wrestles with God at Peniel, prays before meeting Esau, receives a dislocated hip and the new name Israel, and declares that he has seen God face to face and his life was spared.",
  openGraph: { title: "Genesis 32 Chapter Guide — Vine", description: "A guide to Genesis 32 — Jacob wrestles with God, receives the name Israel, and names the place Peniel.", images: ["/api/og?title=Genesis+32+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 32 Chapter Guide — Vine", description: "A deep guide to Genesis 32 — Jacob wrestles with God at Peniel.", images: ["/api/og?title=Genesis+32+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
