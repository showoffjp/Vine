import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 37 Chapter Guide - Delight in the Lord, Wait on God | The Vine",
  description: "A deep guide to Psalm 37 -- a wisdom psalm on trusting God when the wicked seem to prosper. Delight in the Lord, commit your way, be still and wait, inherit the land. Structured as a Hebrew acrostic, Psalm 37 addresses the timeless question of why evildoers flourish.",
  openGraph: { title: "Psalm 37 Chapter Guide - Delight in the Lord, Wait on God | The Vine", description: "Explore Psalm 37 -- the Hebrew acrostic wisdom psalm on fret not, delight in the Lord, commit your way, and the meek inheriting the earth.", images: ["/api/og?title=Psalm+37+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 37 Chapter Guide - Delight in the Lord, Wait on God | The Vine", description: "A deep guide to Psalm 37 and trusting God when the wicked prosper.", images: ["/api/og?title=Psalm+37+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
