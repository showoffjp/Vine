import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 64 Study Guide -- Hear My Voice, O God, in My Complaint",
  description: "Verse-by-verse study of Psalm 64 -- David's prayer against the secret plots and sharp tongues of the wicked, God's sudden arrow of judgment, and the rejoicing of the righteous.",
  openGraph: {
    title: "Psalm 64 Study Guide -- Hear My Voice, O God, in My Complaint",
    description: "Deep dive into Psalm 64: the ambush of slanderous words, the God who turns the schemers' arrows back on themselves, and the gladness of all the upright in heart.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
