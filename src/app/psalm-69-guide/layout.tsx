import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 69 Study Guide &mdash; Save Me O God, the Waters Have Come Up to My Neck",
  description: "A verse-by-verse guide to Psalm 69 &mdash; the great messianic passion psalm: zeal for God's house, the reproach borne for God's sake, the gall and vinegar, and the deliverance of the afflicted, quoted throughout the Gospels.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
