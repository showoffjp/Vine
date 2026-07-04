import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 85 Study Guide -- Righteousness and Peace Kiss Each Other",
  description: "Verse-by-verse study of Psalm 85 -- the Korahite revival prayer: past restoration pleaded for present renewal, 'Will you not revive us again?', the listening posture of verse 8, and the great meeting where steadfast love and faithfulness meet and righteousness and peace kiss.",
  openGraph: {
    title: "Psalm 85 Study Guide -- Righteousness and Peace Kiss Each Other",
    description: "Deep dive into Psalm 85: the anatomy of revival prayer and the fourfold embrace of verse 10, fulfilled where mercy and truth met at the cross.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
