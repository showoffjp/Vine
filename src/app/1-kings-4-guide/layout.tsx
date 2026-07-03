import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 4 Chapter Guide — Solomon's Kingdom",
  description: "A deep guide to 1 Kings 4 — Solomon's royal officials, the twelve district governors, abundant provision, peace on all sides with every man under his vine and fig tree, and wisdom surpassing all the sages of the East and Egypt.",
  openGraph: { title: "1 Kings 4 Chapter Guide — Vine", description: "A guide to 1 Kings 4 — Solomon's administration, abundant provision, the peace of his kingdom, and his extraordinary God-given wisdom.", images: ["/api/og?title=1+Kings+4+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 4 Chapter Guide — Vine", description: "A deep guide to 1 Kings 4 — Solomon's kingdom in all its glory.", images: ["/api/og?title=1+Kings+4+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
