import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 32: The Coming Righteous King and the Outpouring of the Spirit | Vine",
  description:
    "A comprehensive chapter guide to Isaiah 32 -- the coming king who reigns in righteousness, the complacent women of Jerusalem, and the transforming outpouring of the Spirit from on high.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
