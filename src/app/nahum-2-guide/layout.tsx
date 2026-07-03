import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nahum 2 Study Guide &mdash; The Destroyer Has Come Against Nineveh",
  description: "A verse-by-verse guide to Nahum 2 &mdash; the vivid battle poetry of Nineveh's fall, the lion's den emptied, and the LORD restoring the splendor of Jacob as the Assyrian empire collapses.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
