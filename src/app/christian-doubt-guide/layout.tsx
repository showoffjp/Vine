import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Faith Through Doubt: Christian Doubt | The Vine",
  description: "A guide to Christian doubt — how honest questioning can deepen belief, the difference between doubt and unbelief, and why the church must make room for those who struggle to believe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
