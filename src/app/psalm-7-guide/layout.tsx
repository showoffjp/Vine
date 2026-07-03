import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 7 Study Guide &mdash; O LORD My God in You Do I Take Refuge",
  description: "A verse-by-verse guide to Psalm 7 &mdash; David's plea for vindication against a false accuser, God as the righteous judge who tests minds and hearts, and the boomerang of evil that recoils on the one who digs the pit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
