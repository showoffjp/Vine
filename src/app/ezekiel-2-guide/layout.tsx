import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ezekiel 2 Study Guide &mdash; Son of Man I Send You to Israel",
  description: "A verse-by-verse guide to Ezekiel 2 &mdash; God's commissioning of Ezekiel as prophet to a rebellious house, the command not to fear thorns and briers, and the scroll of lamentation to be eaten.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
