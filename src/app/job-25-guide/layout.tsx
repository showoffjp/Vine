import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 25 Guide &mdash; How Can Man Be Righteous Before God? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 25 &mdash; Bildad's brief third speech exalting God's majesty and reducing man to 'a maggot... a worm,' and the gospel answer to his unwitting question: how a sinner is made righteous before God in Christ.",
  openGraph: {
    title: "Job 25 Guide &mdash; How Can Man Be Righteous Before God?",
    description: "Bildad's shortest speech asks the most important question in the Bible as a dead-end. The gospel answers it: not by our righteousness, but by Christ's.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
