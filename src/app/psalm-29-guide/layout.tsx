import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 29 Study Guide &mdash; The Voice of the LORD Over the Waters",
  description: "A verse-by-verse guide to Psalm 29 &mdash; the sevenfold voice of the LORD thundering in the storm, the call of the heavenly beings to ascribe glory, and the LORD enthroned as King who gives strength and blesses his people with peace.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
