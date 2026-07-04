import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 109 Study Guide -- Be Not Silent, O God of My Praise",
  description: "Verse-by-verse study of Psalm 109 -- the hardest imprecatory psalm: David slandered in return for his love, vengeance handed to God rather than taken, and the apostolic reading of verse 8 in Acts 1:20.",
  openGraph: {
    title: "Psalm 109 Study Guide -- Be Not Silent, O God of My Praise",
    description: "Deep dive into Psalm 109: the ethics of imprecation, the betrayed king who gives himself to prayer, the Judas connection in Acts 1, and the movement from accusation to doxology.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
