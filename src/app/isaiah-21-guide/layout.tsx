import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 21: The Burden of Babylon, Dumah, and Arabia | Vine",
  description: "A verse-by-verse study of Isaiah 21 -- the Wilderness of the Sea oracle, the Watchman vision, Fallen is Babylon, and the Arabian judgment. Themes, application, and teaching videos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
