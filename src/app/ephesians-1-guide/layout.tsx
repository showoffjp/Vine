import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ephesians 1: The Great Blessing Hymn -- A Verse-by-Verse Study Guide | Vine",
  description:
    "A comprehensive verse-by-verse study of Ephesians 1 -- election before the foundation of the world, adoption through Christ, redemption by his blood, the sealing of the Holy Spirit, and Paul's prayer for wisdom and revelation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
