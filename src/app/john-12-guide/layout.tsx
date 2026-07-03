import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 12 Guide — Christian Study",
  description: "A deep guide to John chapter 12 — Mary's anointing of Jesus at Bethany, the Triumphal Entry into Jerusalem, the coming of the Greeks and the declaration that the hour has come, and John's reflection on belief and unbelief as the public ministry gives way to the Passion.",
  openGraph: { title: "John 12 Guide — Vine", description: "A guide to John 12 — Mary's anointing, the Triumphal Entry, the hour of glory, and the verdict of unbelief.", images: ["/api/og?title=John+12+Guide"] },
  twitter: { card: "summary_large_image", title: "John 12 Guide — Vine", description: "A deep guide to John chapter 12.", images: ["/api/og?title=John+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
