import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 4 Guide &mdash; Can Mortal Man Be in the Right Before God? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 4 &mdash; Eliphaz's first speech: his courteous opening, the retribution principle ('who that was innocent ever perished?'), the eerie vision in the night, and the haunting question, 'Can mortal man be in the right before God?'",
  openGraph: {
    title: "Job 4 Guide &mdash; Can Mortal Man Be in the Right Before God?",
    description: "Eliphaz begins the dialogue: orthodox theology, misapplied to a suffering friend.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
