import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hosea 4 Study Guide &mdash; My People Are Destroyed for Lack of Knowledge",
  description: "A verse-by-verse guide to Hosea 4 &mdash; God's lawsuit against Israel for no faithfulness, steadfast love, or knowledge of God, the failure of the priests, and a land mourning under the weight of sin.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
