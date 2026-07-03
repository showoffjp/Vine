import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 116 Study Guide &mdash; I Love the LORD Because He Has Heard My Voice",
  description: "A verse-by-verse guide to Psalm 116 &mdash; the thanksgiving of one delivered from death, the question 'what shall I render to the LORD?', lifting the cup of salvation, and the precious death of the saints in God's sight.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
