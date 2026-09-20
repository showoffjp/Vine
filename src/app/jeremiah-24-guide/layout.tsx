import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 24 Guide &mdash; Two Baskets of Figs &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 24 &mdash; the vision of good and bad figs that inverts every human assessment: the exiles are the good fruit, and God promises, 'I will give them a heart to know that I am the Lord.'",
  openGraph: {
    title: "Jeremiah 24 Guide &mdash; Two Baskets of Figs",
    description: "Exile looked like abandonment and was salvation; staying looked like favor and was ruin. Circumstances are not verdicts, and the new heart is a gift.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
