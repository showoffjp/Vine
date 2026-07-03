import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 114 Study Guide -- When Israel Went Out of Egypt",
  description: "Verse-by-verse study of Psalm 114 -- the most vivid and poetic Exodus meditation in the Psalter: the sea fleeing, Jordan turning back, mountains skipping like rams, and the earth trembling at God's presence.",
  openGraph: {
    title: "Psalm 114 Study Guide -- When Israel Went Out of Egypt",
    description: "Deep dive into Psalm 114: personified nature responding to God's presence, the Exodus and Jordan crossing as one continuous act of salvation, and the NT fulfillment in the new Exodus through Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
