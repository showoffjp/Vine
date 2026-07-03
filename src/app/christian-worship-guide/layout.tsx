import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Worship Guide | Vine",
  description: "A theological and practical guide to Christian worship — the elements of corporate worship, why we worship, singing and praise, liturgy vs. contemporary, the Lord's Day, and private vs. corporate worship.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
