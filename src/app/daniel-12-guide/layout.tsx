import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daniel 12: The Resurrection and the End of Days - A Study Guide | Vine",
  description: "The rising of Michael in the great tribulation, the clearest Old Testament resurrection text, the wise who shine like the stars, the sealing of the book until the time of the end, the apocalyptic numbers, and the promised rest for Daniel. A study guide to Daniel chapter 12.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
