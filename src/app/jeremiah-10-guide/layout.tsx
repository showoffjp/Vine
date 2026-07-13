import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 10 Guide &mdash; The Living God and the Dead Idols &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 10 &mdash; the satire on idols as scarecrows that must be carried and nailed down, against the living God who made heaven and earth and is 'the portion of Jacob.'",
  openGraph: {
    title: "Jeremiah 10 Guide &mdash; The Living God and the Dead Idols",
    description: "Idols cannot speak, walk, harm, or help -- but the Lord is the living God and everlasting King. We become like what we worship; choose the God who gives life.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
