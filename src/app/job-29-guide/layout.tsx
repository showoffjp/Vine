import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 29 Guide &mdash; When God Watched Over Me &mdash; Christian Study",
  description: "A verse-by-verse study of Job 29 &mdash; Job's tender memory of his former days: the friendship of God upon his tent, his children around him, and the honor he held for delivering the poor, the fatherless, the widow, and the blind.",
  openGraph: {
    title: "Job 29 Guide &mdash; When God Watched Over Me",
    description: "Job begins his final defense with memory -- a portrait of godly greatness measured by mercy, and a righteous life laid before God with the question: how could this deserve ruin?",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
