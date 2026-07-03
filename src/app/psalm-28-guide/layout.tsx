import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 28 Study Guide &mdash; The LORD Is My Strength and My Shield",
  description: "A verse-by-verse guide to Psalm 28 &mdash; the cry not to be left in silence, the plea for justice, and the turn to praise as the LORD hears: the LORD is my strength and shield, the saving refuge of his anointed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
