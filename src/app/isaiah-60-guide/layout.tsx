import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 60 Study Guide &mdash; Arise Shine for Your Light Has Come",
  description: "A verse-by-verse guide to Isaiah 60 &mdash; the glory of God rising upon his people, the nations streaming to Zion's light, and the eternal city of the Lord.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
