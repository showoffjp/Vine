import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 149 Study Guide &mdash; Sing to the LORD a New Song",
  description: "A verse-by-verse guide to Psalm 149 &mdash; the assembly of the godly singing a new song, the LORD who takes pleasure in his people and adorns the humble with salvation, and the high praises of God in their mouths.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
