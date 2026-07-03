import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Micah 5 Study Guide &mdash; But You Bethlehem Ephrathah",
  description: "A verse-by-verse guide to Micah 5 &mdash; the messianic prophecy of the ruler from Bethlehem, the remnant who will stand when the Assyrian invades, and the purging of false trust.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
