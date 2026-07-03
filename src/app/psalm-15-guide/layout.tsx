import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 15 Study Guide &mdash; Who Shall Dwell on Your Holy Hill",
  description: "A verse-by-verse guide to Psalm 15 &mdash; the entrance liturgy describing the character of one who may dwell with God: walking blamelessly, speaking truth, keeping oaths, and doing no wrong to a neighbor.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
