import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 31 Study Guide &mdash; Into Your Hand I Commit My Spirit",
  description: "A verse-by-verse guide to Psalm 31 &mdash; the prayer of trust Jesus quoted from the cross, 'my times are in your hand,' the refuge of the LORD, and the abundant goodness stored up for those who fear him.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
