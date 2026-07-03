import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah Chapter 3 Guide - The Vine",
  description: "A comprehensive chapter guide to Isaiah 3: the LORD removes support and supply from Jerusalem and Judah, boys and infants rule, the leaders are put on trial for devouring the vineyard and grinding the face of the poor, and the haughty daughters of Zion see their finery turned to mourning.",
};

export default function Isaiah3GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
