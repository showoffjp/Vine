import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 105 Study Guide -- He Remembers His Covenant Forever",
  description: "Verse-by-verse study of Psalm 105 -- Israel's history told entirely as God's faithfulness: the Abrahamic covenant as history's engine, Joseph sent ahead, the plagues and exodus, wilderness provision, and the goal of grace: that they might keep his statutes.",
  openGraph: {
    title: "Psalm 105 Study Guide -- He Remembers His Covenant Forever",
    description: "Deep dive into Psalm 105: seek, remember, tell -- the thanksgiving history where no sin of Israel is mentioned, because the whole story is covenant kept.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
