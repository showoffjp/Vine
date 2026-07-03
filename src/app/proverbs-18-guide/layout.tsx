import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs Chapter 18 Guide - The Vine",
  description: "A comprehensive chapter guide to Proverbs 18: the danger of isolation and pride, the destructive and life-giving power of words, the name of the LORD as a strong tower and refuge, humility that comes before honor, the wisdom of listening before speaking, death and life in the power of the tongue, and the friend who sticks closer than a brother.",
};

export default function Proverbs18GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
