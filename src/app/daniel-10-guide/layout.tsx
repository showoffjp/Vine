import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daniel 10: The Man Clothed in Linen and Spiritual Warfare - A Study Guide | Vine",
  description:
    "A comprehensive study guide to Daniel 10 - the discipline of prayer and fasting, the glorious heavenly messenger, the prince of Persia and the reality of spiritual warfare, the prayer heard from the first day, and Michael the guardian of Israel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
