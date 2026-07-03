import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 54 Study Guide &mdash; Sing Barren Woman, Your Maker Is Your Husband",
  description: "A verse-by-verse guide to Isaiah 54 &mdash; God's call to the barren to sing, his covenant of peace, and the promise that no weapon formed against his people shall prosper.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
