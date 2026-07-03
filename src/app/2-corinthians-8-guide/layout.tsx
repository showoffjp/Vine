import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2 Corinthians 8: The Grace of Giving | Vine",
  description:
    "A comprehensive verse-by-verse study guide to 2 Corinthians chapter 8 - the example of the Macedonian churches, giving oneself first to the Lord, Christ who became poor so that we might become rich, completing what was begun, the principle of equality and the manna pattern, and financial integrity in ministry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
