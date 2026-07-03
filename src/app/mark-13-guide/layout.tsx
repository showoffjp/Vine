import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mark 13: The Olivet Discourse - A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive study guide to Mark 13, the Olivet Discourse - the destruction of the temple, the signs of the end, the abomination of desolation, the coming of the Son of Man, and the call to stay awake and watch.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
