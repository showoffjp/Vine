import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 108 Study Guide -- My Heart Is Steadfast, O God",
  description: "Verse-by-verse study of Psalm 108 -- David's composite psalm joining Psalm 57 and Psalm 60: steadfast praise that wakes the dawn, God's word over the map, and victory that comes from God alone.",
  openGraph: {
    title: "Psalm 108 Study Guide -- My Heart Is Steadfast, O God",
    description: "Deep dive into Psalm 108: old prayers for new battles, doxology before petition, and the confession that with God we shall do valiantly, for vain is the salvation of man.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
