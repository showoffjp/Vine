import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 20 Guide &mdash; The Exulting of the Wicked Is Short &mdash; Christian Study",
  description: "A verse-by-verse study of Job 20 &mdash; Zophar's second speech: his insistence that the triumph of the wicked is brief, that the sweet sin swallowed will be vomited up, and that God's wrath will consume the ungodly -- a rigid theology aimed at Job.",
  openGraph: {
    title: "Job 20 Guide &mdash; The Exulting of the Wicked Is Short",
    description: "Zophar's last word: the wicked prosper only for a moment -- a true half-truth pressed as a full verdict on Job.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
