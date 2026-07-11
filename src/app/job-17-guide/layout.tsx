import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 17 Guide &mdash; My Spirit Is Broken &mdash; Christian Study",
  description: "A verse-by-verse study of Job 17 &mdash; Job at the bottom: his spirit broken, the grave ready for him, mocked by those around him, asking who will put up a pledge for him, and making his bed in darkness -- yet still appealing to God.",
  openGraph: {
    title: "Job 17 Guide &mdash; My Spirit Is Broken",
    description: "The depths of Job's despair -- and the faith that keeps addressing God even from the edge of the grave.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
