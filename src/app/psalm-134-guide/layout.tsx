import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 134 Study Guide -- Come, Bless the LORD, All You Servants",
  description: "Verse-by-verse study of Psalm 134 -- the final Song of Ascents: the night-shift worshipers in the house of the LORD, the two-way benediction, and the Maker of heaven and earth who blesses from Zion.",
  openGraph: {
    title: "Psalm 134 Study Guide -- Come, Bless the LORD, All You Servants",
    description: "Deep dive into Psalm 134: worship that no one sees, lifting hands to the holy place, and the pilgrim road that ends in blessing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
