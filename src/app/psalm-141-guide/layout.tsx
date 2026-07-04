import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 141 Study Guide -- Let My Prayer Be Counted as Incense",
  description: "Verse-by-verse study of Psalm 141 -- David's evening prayer: prayer as incense and lifted hands as the evening sacrifice, the guarded mouth and heart, the kindness of a righteous rebuke, and eyes fixed on the LORD amid temptation.",
  openGraph: {
    title: "Psalm 141 Study Guide -- Let My Prayer Be Counted as Incense",
    description: "Deep dive into Psalm 141: the evening sacrifice of prayer (Revelation 5:8), the guard over the mouth, welcoming wounds from a friend, and refusing the delicacies of evildoers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
