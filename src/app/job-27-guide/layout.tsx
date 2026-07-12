import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 27 Guide &mdash; I Will Not Put Away My Integrity &mdash; Christian Study",
  description: "A verse-by-verse study of Job 27 &mdash; Job's solemn oath to hold fast his integrity and never confess false guilt, and his portrait of 'the portion of the wicked,' holding together that the wicked prosper now yet face certain judgment in the end.",
  openGraph: {
    title: "Job 27 Guide &mdash; I Will Not Put Away My Integrity",
    description: "Job closes the dialogue with an oath of integrity and an affirmation of certain judgment -- refusing both the friends' lie and the opposite lie, and pointing to the cross.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
