import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 41 Study Guide -- Blessed Is He Who Considers the Poor",
  description: "Verse-by-verse study of Psalm 41 -- David's prayer for healing, betrayal by a close friend, and the doxology closing Book I of the Psalms, with commentary from Calvin, Spurgeon, and Matthew Henry.",
  openGraph: {
    title: "Psalm 41 Study Guide -- Blessed Is He Who Considers the Poor",
    description: "Deep dive into Psalm 41: care for the poor, betrayal foreshadowing Judas, and the NT fulfillment in Jesus as the suffering servant.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
