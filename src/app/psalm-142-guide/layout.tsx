import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 142 Study Guide -- You Are My Refuge, My Portion",
  description: "Verse-by-verse study of Psalm 142 -- David's prayer from the cave: pouring out complaint before the LORD, the ache of 'no one cares for my soul,' God as refuge when every refuge fails, and the vow of thanksgiving among the righteous.",
  openGraph: {
    title: "Psalm 142 Study Guide -- You Are My Refuge, My Portion",
    description: "Deep dive into Psalm 142: the maskil from the cave, praying at the dead end, the empty place at the right hand, and the God who brings the soul out of prison.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
