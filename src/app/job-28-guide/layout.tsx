import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 28 Guide &mdash; Where Shall Wisdom Be Found? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 28 &mdash; the serene hymn to wisdom: humanity can mine the deepest treasures of the earth, yet wisdom cannot be found or bought. God alone knows the way to it, and 'the fear of the Lord, that is wisdom.'",
  openGraph: {
    title: "Job 28 Guide &mdash; Where Shall Wisdom Be Found?",
    description: "The theological hinge of the book: true wisdom is hidden from all human searching and belongs to God alone -- and the treasure has come to us in Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
