import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 13 Study Guide &mdash; How Long O LORD Will You Forget Me",
  description: "A verse-by-verse guide to Psalm 13 &mdash; David's fourfold 'how long?' lament, the honest cry of feeling forgotten by God, the turn to trust in steadfast love, and the resolve to sing because the LORD has dealt bountifully.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
