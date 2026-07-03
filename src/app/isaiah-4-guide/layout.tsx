import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 4: The Branch of the LORD and the Canopy of Glory | Vine",
  description: "A study guide to Isaiah chapter 4 - the holy remnant recorded for life, the messianic Branch of the LORD, cleansing by a spirit of judgment and burning, and the returning glory of God as a canopy over a renewed Zion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
