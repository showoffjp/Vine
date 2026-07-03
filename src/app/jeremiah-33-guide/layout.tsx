import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 33 Study Guide &mdash; Call to Me and I Will Answer You",
  description: "A verse-by-verse guide to Jeremiah 33 &mdash; God's invitation to call on him for great and unsearchable things, the restoration of Jerusalem, and the coming Righteous Branch of David.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
