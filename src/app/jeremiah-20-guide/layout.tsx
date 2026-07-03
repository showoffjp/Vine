import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 20 Study Guide &mdash; Cursed Be the Day I Was Born",
  description: "A verse-by-verse guide to Jeremiah 20 &mdash; Jeremiah's arrest and public humiliation, his burning compulsion to prophesy, and his most anguished lament — the raw cry of a prophet at the breaking point.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
