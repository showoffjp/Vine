import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 49 Study Guide -- Why Should I Fear in Times of Trouble?",
  description: "Verse-by-verse study of Psalm 49 -- the Sons of Korah's wisdom meditation on the folly of trusting riches, the universality of death, and the resurrection hope of being ransomed from Sheol.",
  openGraph: {
    title: "Psalm 49 Study Guide -- Why Should I Fear in Times of Trouble?",
    description: "Deep dive into Psalm 49: wealth cannot ransom a soul, death levels rich and poor, and God's promise to redeem his people from the grave.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
