import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 24 Guide &mdash; Why No Times of Judgment? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 24 &mdash; Job's searing question about why God keeps no fixed times of judgment, his catalogue of oppression against the poor, and the assurance that the wicked are exalted only 'a little while, and then are gone.'",
  openGraph: {
    title: "Job 24 Guide &mdash; Why No Times of Judgment?",
    description: "Job forces us to sit with the cries of the exploited and the delay of justice -- faith wrestling honestly while trusting the God who will finally set all things right.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
