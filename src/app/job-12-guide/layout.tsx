import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 12 Guide &mdash; With God Are Wisdom and Might &mdash; Christian Study",
  description: "A verse-by-verse study of Job 12 &mdash; Job answers the friends with biting irony ('no doubt you are the people, and wisdom will die with you'), then soars into a sweeping hymn to God's sovereignty over nature, nations, and the mighty.",
  openGraph: {
    title: "Job 12 Guide &mdash; With God Are Wisdom and Might",
    description: "Job out-theologizes his friends: he knows God's sovereignty better than they do, which is exactly why he grieves.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
