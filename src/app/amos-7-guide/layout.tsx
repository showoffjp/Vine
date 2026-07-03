import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Amos 7 Study Guide &mdash; Thus the Lord Showed Me",
  description: "A verse-by-verse guide to Amos 7 &mdash; the three prophetic visions (locusts, fire, plumb line), the confrontation between Amos and Amaziah the priest at Bethel, and the prophet's humble defense.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
