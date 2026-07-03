import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 51 Study Guide &mdash; Look to the Rock from Which You Were Cut",
  description: "A verse-by-verse guide to Isaiah 51 &mdash; the call to look back to Abraham, to awake and fear God rather than men, and God's promise of everlasting salvation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
