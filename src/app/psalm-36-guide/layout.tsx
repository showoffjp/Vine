import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 36 Study Guide &mdash; Your Steadfast Love Extends to the Heavens",
  description: "A verse-by-verse guide to Psalm 36 &mdash; the contrast between the transgression of the wicked and the immeasurable steadfast love of God, the fountain of life, and the light in whose light we see light.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
