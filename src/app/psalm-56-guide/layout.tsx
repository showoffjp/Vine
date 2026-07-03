import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 56 Study Guide -- When I Am Afraid, I Put My Trust in You",
  description: "Verse-by-verse study of Psalm 56 -- David's prayer when the Philistines seized him in Gath, the conquest of fear by trust, and God's tender bottle of tears.",
  openGraph: {
    title: "Psalm 56 Study Guide -- When I Am Afraid, I Put My Trust in You",
    description: "Deep dive into Psalm 56: trust as the antidote to fear, God's record of our tears, and the refrain 'in God I trust; I shall not be afraid.'",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
