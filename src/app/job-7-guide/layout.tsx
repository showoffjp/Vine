import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 7 Guide &mdash; What Is Man, That You Make So Much of Him? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 7 &mdash; Job turns from his friends to God directly: life as hard service, nights of misery, 'my life is a breath,' and the bold, aching question that inverts Psalm 8: 'What is man, that you make so much of him?'",
  openGraph: {
    title: "Job 7 Guide &mdash; What Is Man, That You Make So Much of Him?",
    description: "Job addresses God face to face: the honest prayer of a man who will not stop speaking to the God who wounds him.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
