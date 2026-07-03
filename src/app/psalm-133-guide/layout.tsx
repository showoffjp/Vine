import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 133 Study Guide &mdash; How Good When Brothers Dwell in Unity",
  description: "A verse-by-verse guide to Psalm 133 &mdash; a Song of Ascents on the blessing of unity among God's people, like the precious oil on Aaron's head and the dew of Hermon, where the LORD commands the blessing of life forevermore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
