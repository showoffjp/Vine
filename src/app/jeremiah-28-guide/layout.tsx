import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 28 Guide &mdash; Hananiah and the Comfortable Lie &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 28 &mdash; two prophets, one God, opposite messages: Hananiah's two-year promise, Jeremiah's sincere 'Amen' and the test of fulfillment, the wooden bars replaced by iron, and a false prophet's death.",
  openGraph: {
    title: "Jeremiah 28 Guide &mdash; Hananiah and the Comfortable Lie",
    description: "The counterfeit arrives in the sanctuary with credentials and certainty -- and asks nothing of you. Scripture's field manual for testing the voices.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
