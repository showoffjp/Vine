import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 45 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 45 — Joseph reveals himself to his brothers with tears, releases them from guilt, and declares that God sent him before them to preserve life. A study in divine providence, forgiveness, and the reunion of Jacob's family in Egypt.",
  openGraph: { title: "Genesis 45 Chapter Guide — Vine", description: "A guide to Genesis 45 — I am Joseph, God sent me before you to preserve life.", images: ["/api/og?title=Genesis+45+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 45 Chapter Guide — Vine", description: "A deep guide to Genesis 45 — Joseph reveals himself to his brothers.", images: ["/api/og?title=Genesis+45+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
