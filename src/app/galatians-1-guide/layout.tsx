import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Galatians 1: No Other Gospel -- A Verse-by-Verse Study Guide | Vine",
  description:
    "A comprehensive verse-by-verse study of Galatians 1 -- Paul's passionate defense of the gospel of grace, the double anathema, his apostleship by direct revelation, and his dramatic conversion narrative.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
