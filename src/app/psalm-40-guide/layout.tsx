import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 40 Study Guide &mdash; I Waited Patiently for the LORD",
  description: "A verse-by-verse guide to Psalm 40 &mdash; the new song after being lifted from the pit, 'sacrifice you did not desire but a body you have given me' (Hebrews 10), and the cry for help that ends the psalm.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
