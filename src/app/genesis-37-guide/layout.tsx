import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 37 Guide — Joseph's Coat and the Pit",
  description: "A deep guide to Genesis 37 — Jacob's love for Joseph, the coat of many colors, Joseph's two dreams, his brothers' hatred, the pit at Dothan, the sale to the Ishmaelites for twenty pieces of silver, and Jacob's bitter mourning.",
  openGraph: { title: "Genesis 37 Guide — Vine", description: "A guide to Genesis 37 — Joseph's coat, his dreams, the pit, and the sale to Egypt.", images: ["/api/og?title=Genesis+37+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 37 Guide — Vine", description: "A deep guide to Genesis 37 — Joseph, his coat, and his brothers.", images: ["/api/og?title=Genesis+37+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
