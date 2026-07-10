import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 11 Guide &mdash; Can You Find Out the Deep Things of God? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 11 &mdash; Zophar's harsh first speech: his rebuke of Job's 'babble,' the unsearchable depths of God, and the promise -- true in principle, cruel in application -- that if Job puts away sin his life will be brighter than noonday.",
  openGraph: {
    title: "Job 11 Guide &mdash; Can You Find Out the Deep Things of God?",
    description: "Zophar the dogmatist: the bluntest of the three friends, certain Job is getting less than he deserves.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
