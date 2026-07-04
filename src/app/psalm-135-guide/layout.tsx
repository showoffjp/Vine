import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 135 Study Guide -- Whatever the LORD Pleases, He Does",
  description: "Verse-by-verse study of Psalm 135 -- the mosaic psalm of praise: the LORD's electing love for Jacob, his sovereign freedom over nature and history, the emptiness of idols, and the blessing that rises house by house from Zion.",
  openGraph: {
    title: "Psalm 135 Study Guide -- Whatever the LORD Pleases, He Does",
    description: "Deep dive into Psalm 135: praise from inside the courts, the God of storm and exodus, idols that deaden their makers, and the living God who blesses from Zion.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
