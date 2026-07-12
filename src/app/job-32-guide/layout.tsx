import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 32 Guide &mdash; The Anger of Elihu Was Kindled &mdash; Christian Study",
  description: "A verse-by-verse study of Job 32 &mdash; the introduction of Elihu, the angry young man who breaks his silence after the friends fail, insisting that 'it is the spirit in man' that gives understanding, not age alone.",
  openGraph: {
    title: "Job 32 Guide &mdash; The Anger of Elihu Was Kindled",
    description: "A new voice enters the book: Elihu, zealous and long-winded yet humble toward his elders, embodying both the promise and the peril of youthful zeal.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
