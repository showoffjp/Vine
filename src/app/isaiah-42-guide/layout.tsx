import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 42 Study Guide &mdash; The First Servant Song and God's New Thing",
  description: "A verse-by-verse guide to Isaiah 42 &mdash; the first Servant Song (Here is my servant whom I uphold), the bruised reed, and God's call to proclaim justice to the nations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
