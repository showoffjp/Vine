import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 124 Study Guide -- If It Had Not Been the LORD",
  description: "Verse-by-verse study of Psalm 124 -- a Song of Ascents by David: a thanksgiving psalm celebrating God's decisive rescue from enemies who would have swallowed Israel alive, with the triumphant confession that our help is in the name of the LORD.",
  openGraph: {
    title: "Psalm 124 Study Guide -- If It Had Not Been the LORD",
    description: "Deep dive into Psalm 124: David's communal thanksgiving for impossible rescue, the flood and snare imagery of spiritual danger, and the great declaration that our help is in the name of the LORD, Maker of heaven and earth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
