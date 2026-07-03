import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 3 Study Guide &mdash; O LORD How Many Are My Foes",
  description: "A verse-by-verse guide to Psalm 3 &mdash; David's morning psalm written as he fled from Absalom, the LORD as a shield about him, lying down and waking again because the LORD sustains, and salvation belonging to the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
