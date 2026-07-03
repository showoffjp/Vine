import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 17 Study Guide &mdash; Keep Me as the Apple of Your Eye",
  description: "A verse-by-verse guide to Psalm 17 &mdash; David's plea of integrity, the wondrous steadfast love of God, hiding in the shadow of his wings, and the hope of beholding God's face and being satisfied with his likeness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
