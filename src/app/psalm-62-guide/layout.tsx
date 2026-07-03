import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 62 Study Guide &mdash; For God Alone My Soul Waits in Silence",
  description: "A verse-by-verse guide to Psalm 62 &mdash; the soul that waits in silence for God alone, the LORD as rock, salvation, and fortress, the call to pour out the heart before him, and trusting power and steadfast love that belong to God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
