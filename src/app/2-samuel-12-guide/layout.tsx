import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Samuel 12 Guide — Nathan, David, and the Grace of God",
  description: "A deep guide to 2 Samuel 12 — Nathan's parable of the ewe lamb, the devastating word 'You are the man!', David's confession of sin, God's forgiveness and the abiding consequences, the death of the child, and the birth of Psalm 51.",
  openGraph: { title: "2 Samuel 12 Guide — Vine", description: "A guide to 2 Samuel 12 — Nathan's parable, David's confession, and the grace that takes away sin while consequences remain.", images: ["/api/og?title=2+Samuel+12+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 12 Guide — Vine", description: "A deep guide to 2 Samuel 12 — Nathan, David, and the grace of God.", images: ["/api/og?title=2+Samuel+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
