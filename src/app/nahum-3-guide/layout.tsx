import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nahum 3 Study Guide &mdash; Woe to the Bloody City",
  description: "A verse-by-verse guide to Nahum 3 &mdash; the final woe oracle against Nineveh for its bloodshed and sorceries, the comparison to Thebes that fell, and the verdict that there is no healing for Nineveh's hurt.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
