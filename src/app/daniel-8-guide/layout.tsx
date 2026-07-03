import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daniel 8: The Vision of the Ram and the Goat - Study Guide | Vine",
  description: "A comprehensive study guide to Daniel chapter 8 - the ram of Medo-Persia, the goat of Greece, Alexander and the four horns, the little horn of Antiochus, and the 2300 evenings and mornings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
