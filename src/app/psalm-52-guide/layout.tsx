import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 52 Study Guide -- Why Do You Boast in Evil, O Mighty Man?",
  description: "Verse-by-verse study of Psalm 52 -- David's rebuke of Doeg the Edomite, the contrast between the deceitful tongue and the green olive tree, and the certain downfall of the boaster.",
  openGraph: {
    title: "Psalm 52 Study Guide -- Why Do You Boast in Evil, O Mighty Man?",
    description: "Deep dive into Psalm 52: the destructive tongue, the false security of wealth and power, and the flourishing of the righteous who trust in God's steadfast love.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
