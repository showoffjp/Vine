import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 36 Guide &mdash; He Opens Their Ear by Adversity &mdash; Christian Study",
  description: "A verse-by-verse study of Job 36 &mdash; Elihu's final speech deepens his best insight: God delivers the afflicted by their affliction, warns Job not to turn to iniquity, and begins the hymn to God's greatness in the gathering storm.",
  openGraph: {
    title: "Job 36 Guide &mdash; He Opens Their Ear by Adversity",
    description: "God saves by the very thing that breaks you -- redemptive discipline that opens the ear, and a rising hymn to God's majesty that prepares for the whirlwind.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
