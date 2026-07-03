import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 118 Study Guide &mdash; The Stone the Builders Rejected",
  description: "A verse-by-verse guide to Psalm 118 &mdash; the great thanksgiving of the Egyptian Hallel, 'his steadfast love endures forever,' the rejected stone become the cornerstone, and 'this is the day the LORD has made.'",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
