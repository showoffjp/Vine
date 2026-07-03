import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 5 Study Guide &mdash; Give Ear to My Words O LORD",
  description: "A verse-by-verse guide to Psalm 5 &mdash; David's morning prayer, the God who takes no delight in wickedness, the plea to be led in righteousness, and the joy and shelter of those who take refuge in the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
