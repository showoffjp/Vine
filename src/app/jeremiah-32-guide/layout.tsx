import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 32 Study Guide &mdash; Buy the Field While the City Is Under Siege",
  description: "A verse-by-verse guide to Jeremiah 32 &mdash; Jeremiah's act of faith in purchasing a field while Jerusalem is besieged, his prayer declaring nothing too hard for God, and the new covenant promise of restoration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
