import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 144 Study Guide -- Blessed Be the LORD, My Rock",
  description: "Verse-by-verse study of Psalm 144 -- the warrior's blessing and the flourishing commonwealth: God who trains hands for war, man who is like a breath, the prayer for God to bow the heavens, and the happiness of the people whose God is the LORD.",
  openGraph: {
    title: "Psalm 144 Study Guide -- Blessed Be the LORD, My Rock",
    description: "Deep dive into Psalm 144: the echo of Psalm 18, human frailty and divine regard, the theophany prayer fulfilled in the Incarnation, and the vision of sons like plants and daughters like corner pillars.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
