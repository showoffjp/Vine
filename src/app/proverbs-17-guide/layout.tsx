import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs Chapter 17 Guide - The Vine",
  description: "A comprehensive chapter guide to Proverbs 17: peace over abundance, the LORD as the refiner who tests the heart, true friendship that loves at all times, the wisdom of overlooking and covering offenses, a glad heart as good medicine for the body, and the discipline of restrained speech that marks the wise.",
};

export default function Proverbs17GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
