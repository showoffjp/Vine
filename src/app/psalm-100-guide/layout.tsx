import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 100 Study Guide &mdash; Enter His Gates with Thanksgiving",
  description: "A verse-by-verse guide to Psalm 100 &mdash; the great call to make a joyful noise to the LORD, to know that the LORD is God who made us, to enter his gates with thanksgiving, and his steadfast love that endures forever.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
