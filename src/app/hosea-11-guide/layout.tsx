import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hosea 11 Study Guide &mdash; When Israel Was a Child I Loved Him",
  description: "A verse-by-verse guide to Hosea 11 &mdash; God's tender love for Israel from childhood, the heartbreak of their rebellion, and the divine declaration that his compassion cannot be extinguished.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
