import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 37 Guide &mdash; The Almighty We Cannot Find Out &mdash; Christian Study",
  description: "A verse-by-verse study of Job 37 &mdash; Elihu's storm hymn that closes all human speech in the book: the voice of God in the thunder, the challenge to consider his wonders, and the confession that the Almighty cannot be found out, bridging to the whirlwind.",
  openGraph: {
    title: "Job 37 Guide &mdash; The Almighty We Cannot Find Out",
    description: "The last human word before God speaks -- awe before the majesty of the storm, and the herald's questions that prepare for the Lord's own voice from the whirlwind.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
