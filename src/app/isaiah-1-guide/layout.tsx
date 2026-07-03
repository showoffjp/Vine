import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 1 Chapter Guide | The Vine",
  description: "A deep study of Isaiah 1 - the prophetic lawsuit, God rejecting empty religion, the call to repentance, and the promise of Zion redeemed by justice.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
