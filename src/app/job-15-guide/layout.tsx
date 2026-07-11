import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 15 Guide &mdash; What Is Man, That He Can Be Pure? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 15 &mdash; Eliphaz's second speech, harsher than his first: he accuses Job of impiety, appeals again to human uncleanness before God, and paints the writhing torment of the wicked man as a portrait of Job.",
  openGraph: {
    title: "Job 15 Guide &mdash; What Is Man, That He Can Be Pure?",
    description: "Eliphaz turns from courtesy to accusation: the friends' compassion hardens as the debate wears on.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
