import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 8 Guide — How Majestic Is Your Name — Christian Study",
  description: "A deep study of Psalm 8 — the paradox of human smallness and dignity before the majesty of God. Explore what it means to be made a little lower than the angels, crowned with glory and honor, and entrusted with stewardship of creation.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
