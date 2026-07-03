import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 8 Chapter Guide | The Vine",
  description: "A deep study of Proverbs 8 - Wisdom personified, the creation narrative, the qanah and amon debates, and Christological significance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
