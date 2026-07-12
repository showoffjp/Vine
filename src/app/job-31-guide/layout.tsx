import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 31 Guide &mdash; Let the Almighty Answer Me &mdash; Christian Study",
  description: "A verse-by-verse study of Job 31 &mdash; the climax of Job's defense: his great oath of clearance swearing innocence sin by sin, from a 'covenant with my eyes' to justice for servants and the poor, ending 'the words of Job are ended.'",
  openGraph: {
    title: "Job 31 Guide &mdash; Let the Almighty Answer Me",
    description: "An ethic of the heart centuries ahead of its time -- the summit of human integrity, and the limit of self-vindication, pointing to the righteousness of Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
