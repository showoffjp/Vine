import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah Chapter 13 Guide - The Vine",
  description: "A comprehensive chapter guide to Isaiah 13: the oracle concerning Babylon and the Day of the LORD - the mustering of consecrated armies on a bare hill, the cosmic darkening of sun, moon, and stars, the punishment of the world for its arrogance, and the fall of Babylon to become like Sodom and Gomorrah, a haunt of wild beasts never to be inhabited again.",
};

export default function Isaiah13GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
