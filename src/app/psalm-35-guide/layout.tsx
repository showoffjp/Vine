import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 35 Study Guide -- Plead My Cause, O LORD",
  description: "Verse-by-verse study of Psalm 35 -- David's urgent prayer for divine vindication against false accusers and unjust enemies, with commentary from Calvin, Spurgeon, and Matthew Henry.",
  openGraph: {
    title: "Psalm 35 Study Guide -- Plead My Cause, O LORD",
    description: "Deep dive into Psalm 35: David's imprecatory prayer, his appeal to God as divine warrior, and the NT lens of Christ's unjust suffering.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
