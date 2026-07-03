import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "James 1 Guide — Christian Study",
  description: "A deep guide to James 1 — counting it all joy in trials, asking the generous God for wisdom, the crown of life for those who endure, every good gift from the Father of lights, and being doers of the word and not hearers only.",
  openGraph: { title: "James 1 Guide — Vine", description: "A guide to James 1 — trials and steadfastness, wisdom, the crown of life, and doers of the word.", images: ["/api/og?title=James+1+Guide"] },
  twitter: { card: "summary_large_image", title: "James 1 Guide — Vine", description: "A deep guide to James 1 — faith tested and lived.", images: ["/api/og?title=James+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
