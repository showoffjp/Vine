import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Zephaniah 1 Study Guide &mdash; The Great Day of the LORD Is Near",
  description: "A verse-by-verse guide to Zephaniah 1 &mdash; the cosmic sweep of divine judgment, the day of wrath and darkness, and the warning to all who are complacent and say the LORD will not do good or evil.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
