import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 104 Study Guide &mdash; Bless the LORD O My Soul",
  description: "A verse-by-verse guide to Psalm 104 &mdash; the great creation hymn praising the LORD who is clothed with light, who set the earth on its foundations, who provides for every creature, and whose Spirit renews the face of the ground.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
