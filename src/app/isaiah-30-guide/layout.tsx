import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 30 Guide -- The Vine",
  description: "A deep study of Isaiah 30: the woe oracle against rebellious children who seek Egypt instead of God, the famous promise of returning and rest (v.15), and the luminous verse 18 -- the LORD waits to be gracious.",
};

export default function Isaiah30GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
