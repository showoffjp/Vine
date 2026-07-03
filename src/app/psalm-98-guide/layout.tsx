import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 98 Study Guide &mdash; Sing to the LORD a New Song",
  description: "A verse-by-verse guide to Psalm 98 &mdash; the salvation the LORD has made known in the sight of the nations, the joyful noise of all the earth, and the floods clapping their hands as the LORD comes to judge.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
