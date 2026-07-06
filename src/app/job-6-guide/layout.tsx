import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 6 Guide &mdash; Oh That My Grief Were Weighed &mdash; Christian Study",
  description: "A verse-by-verse study of Job 6 &mdash; Job's reply to Eliphaz: the unbearable weight of his grief, his longing for God to end his life, and his stinging rebuke of friends who have become like a dry streambed to a thirsty traveler.",
  openGraph: {
    title: "Job 6 Guide &mdash; Oh That My Grief Were Weighed",
    description: "Job answers his comforters: the failure of friendship, and the cry of a man at the end of his strength.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
