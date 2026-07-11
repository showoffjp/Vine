import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 16 Guide &mdash; My Witness Is in Heaven &mdash; Christian Study",
  description: "A verse-by-verse study of Job 16 &mdash; Job calls his friends 'miserable comforters,' describes God's assault on him, and then reaches for hope: 'even now, behold, my witness is in heaven, and he who testifies for me is on high.'",
  openGraph: {
    title: "Job 16 Guide &mdash; My Witness Is in Heaven",
    description: "Against his accusers, Job appeals to a witness and advocate in heaven -- a hope fulfilled in Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
