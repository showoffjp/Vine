import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 41 Guide &mdash; King Over All the Sons of Pride &mdash; Christian Study",
  description: "A verse-by-verse study of Job 41 &mdash; the climax of God's whirlwind speeches: Leviathan, the unconquerable monster of the deep, whom no human can master, and the God who alone reigns over the king of all the sons of pride.",
  openGraph: {
    title: "Job 41 Guide &mdash; King Over All the Sons of Pride",
    description: "If Job cannot stand before Leviathan, how can he contend with its Maker? The monster Job could never defeat -- the ancient serpent -- is crushed by the Lamb.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
