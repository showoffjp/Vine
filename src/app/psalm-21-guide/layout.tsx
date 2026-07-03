import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 21 Study Guide &mdash; In Your Strength the King Rejoices",
  description: "A verse-by-verse guide to Psalm 21 &mdash; the royal psalm of thanksgiving for victory, the king crowned with a crown of fine gold, the blessings of life and length of days, and the exaltation of the LORD in his strength.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
