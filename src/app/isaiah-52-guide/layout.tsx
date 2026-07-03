import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 52 Study Guide &mdash; Awake Zion and How Beautiful the Feet of the Gospel",
  description: "A verse-by-verse guide to Isaiah 52 &mdash; God's call for Zion to awake, the herald of good news, and the transition into the fourth Servant Song.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
