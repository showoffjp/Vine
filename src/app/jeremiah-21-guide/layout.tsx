import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 21 Guide &mdash; The Way of Life and the Way of Death &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 21 &mdash; Zedekiah's last-minute plea for a miracle, the Exodus formula turned against Jerusalem ('I myself will fight against you'), the way of life through surrender, and the charge to the house of David.",
  openGraph: {
    title: "Jeremiah 21 Guide &mdash; The Way of Life and the Way of Death",
    description: "God is nobody's mascot: the outstretched arm crosses the battlefield. Yet even in a doomed city, the way of life stands open -- through surrender.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
