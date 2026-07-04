import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 44 Study Guide -- For Your Sake We Are Killed All the Day Long",
  description: "Verse-by-verse study of Psalm 44 -- the Korahite national lament: the fathers' stories of grace, the inexplicable present defeat, the protest of innocence, the cry 'Awake, O Lord!', and Paul's citation in Romans 8:36 amid 'more than conquerors.'",
  openGraph: {
    title: "Psalm 44 Study Guide -- For Your Sake We Are Killed All the Day Long",
    description: "Deep dive into Psalm 44: suffering without explanation, faith that will not let go of God's past faithfulness, and the lament that Romans 8 sets inside unbreakable love.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
