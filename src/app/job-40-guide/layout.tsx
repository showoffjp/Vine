import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 40 Guide &mdash; Will You Condemn Me That You May Be in the Right? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 40 &mdash; God's challenge and Job's first humbling ('I lay my hand on my mouth'), the piercing question 'Will you condemn me that you may be in the right?', and the unveiling of Behemoth.",
  openGraph: {
    title: "Job 40 Guide &mdash; Will You Condemn Me That You May Be in the Right?",
    description: "God exposes the real fault -- putting God in the wrong to be in the right -- and frees Job by his inability to govern the cosmos or master Behemoth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
