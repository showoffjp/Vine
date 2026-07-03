import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 75 Study Guide -- It Is God Who Executes Judgment",
  description: "Verse-by-verse study of Psalm 75 -- Asaph's psalm of thanksgiving and warning, God as the righteous judge who puts down one and lifts up another, and the cup of his wrath.",
  openGraph: {
    title: "Psalm 75 Study Guide -- It Is God Who Executes Judgment",
    description: "Deep dive into Psalm 75: the appointed time of judgment, the warning against arrogance, the cup in the LORD's hand, and the exaltation of the righteous.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
