import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 77 Study Guide -- I Will Remember the Deeds of the LORD",
  description: "Verse-by-verse study of Psalm 77 -- Asaph's dark night of the soul, the questions that haunt the sleepless, and the deliberate turn to remember God's mighty works of old.",
  openGraph: {
    title: "Psalm 77 Study Guide -- I Will Remember the Deeds of the LORD",
    description: "Deep dive into Psalm 77: the anguished questions of the sleepless believer, the pivot of remembrance, and the path of God through the sea that left no footprints.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
