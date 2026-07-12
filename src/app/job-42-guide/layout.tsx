import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 42 Guide &mdash; Now My Eye Sees You &mdash; Christian Study",
  description: "A verse-by-verse study of Job 42 &mdash; the crown of the book: Job's full repentance before the God he now sees, God's vindication of Job over the friends, Job's intercession for his accusers, and the twofold restoration of his fortunes.",
  openGraph: {
    title: "Job 42 Guide &mdash; Now My Eye Sees You",
    description: "Job receives not an explanation but God himself -- and it is enough. The wrongly-condemned sufferer becomes the mediator for his accusers, a shadow of Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
