import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 43 Study Guide -- Vindicate Me, O God",
  description: "Verse-by-verse study of Psalm 43 -- the companion to Psalm 42, David's plea for divine light and truth to lead him to the altar of God, with commentary from Calvin, Spurgeon, and Kidner.",
  openGraph: {
    title: "Psalm 43 Study Guide -- Vindicate Me, O God",
    description: "Deep dive into Psalm 43: the refrain of hope in despair, God's light as guide, and the triumphal ascent to worship.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
