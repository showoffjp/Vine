import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 57 Study Guide -- My Heart Is Steadfast, I Will Awake the Dawn",
  description: "Verse-by-verse study of Psalm 57 -- David's prayer in the cave fleeing Saul, taking refuge in the shadow of God's wings, and his resolve to awake the dawn with song.",
  openGraph: {
    title: "Psalm 57 Study Guide -- My Heart Is Steadfast, I Will Awake the Dawn",
    description: "Deep dive into Psalm 57: refuge under the shadow of God's wings, the steadfast heart, and the determination to praise God among the nations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
