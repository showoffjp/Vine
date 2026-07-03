import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 62 Study Guide &mdash; For Zion's Sake I Will Not Keep Silent",
  description: "A verse-by-verse guide to Isaiah 62 &mdash; God's passionate intercession for Jerusalem, Zion's new name, and the vision of a redeemed people called the Holy People.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
