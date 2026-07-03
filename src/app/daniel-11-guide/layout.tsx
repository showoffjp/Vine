import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daniel 11: The Kings of the North and South - A Study Guide | Vine",
  description: "Persia and Greece, the long wars of the Ptolemies and Seleucids, Antiochus IV Epiphanes and the abomination of desolation, the wise who stand firm, and the antichrist typology of the time of the end. A study guide to Daniel chapter 11.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
