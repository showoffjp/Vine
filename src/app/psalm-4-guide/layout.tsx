import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 4 Study Guide &mdash; In Peace I Will Both Lie Down and Sleep",
  description: "A verse-by-verse guide to Psalm 4 &mdash; David's evening psalm, the call to be angry and not sin, the gladness God puts in the heart greater than abundance of grain and wine, and peaceful sleep in safety.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
