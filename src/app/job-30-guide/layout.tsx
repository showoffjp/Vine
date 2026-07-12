import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 30 Guide &mdash; But Now They Mock Me &mdash; Christian Study",
  description: "A verse-by-verse study of Job 30 &mdash; Job's shattering account of his present humiliation: mocked by the lowest outcasts, feeling God himself has 'turned cruel,' crying for help and receiving silence, his lyre turned to mourning.",
  openGraph: {
    title: "Job 30 Guide &mdash; But Now They Mock Me",
    description: "The 'now' to chapter 29's 'then' -- one of Scripture's rawest accounts of humiliation and felt abandonment, faith crushed yet still speaking to God.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
