import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 106 Study Guide -- Both We and Our Fathers Have Sinned",
  description: "Verse-by-verse study of Psalm 106 -- Israel's history retold as corporate confession: the golden calf exchange, Moses standing in the breach, the cycles of rebellion and compassion, and the God who remembered his covenant and relented according to his steadfast love.",
  openGraph: {
    title: "Psalm 106 Study Guide -- Both We and Our Fathers Have Sinned",
    description: "Deep dive into Psalm 106: the confession twin of Psalm 105, the exchange of glory (Romans 1:23), the greater Intercessor in the breach, and mercy that outlasts every cycle.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
