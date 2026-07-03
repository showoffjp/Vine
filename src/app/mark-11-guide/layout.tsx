import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Mark 11 Guide - The Triumphal Entry and the Temple",
  description: "A deep guide to Mark 11 - the triumphal entry on the colt that no one had ridden, the cursing of the fig tree, the cleansing of the temple as a house of prayer for all nations, mountain-moving faith and forgiveness, and the question of authority.",
  openGraph: { title: "Mark 11 Guide - The Vine", description: "A guide to Mark 11 - the triumphal entry, the fig tree and the temple, a house of prayer for all nations, faith and forgiveness, and the question of authority.", images: ["/api/og?title=Mark+11+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 11 Guide - The Vine", description: "A deep guide to Mark 11 - the triumphal entry and the confrontation in the temple.", images: ["/api/og?title=Mark+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
