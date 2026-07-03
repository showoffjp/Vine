import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Jeremiah 1 Guide - Christian Study",
  description: "A deep guide to Jeremiah 1 - the sovereign call of the prophet before birth, his objection and the Lord's enabling, the two visions of the almond branch and the boiling pot, and the great promise that makes him a fortified city against the whole land.",
  openGraph: { title: "Jeremiah 1 Guide - Vine", description: "A guide to Jeremiah 1 - the call of the weeping prophet and the certainty of God's word.", images: ["/api/og?title=Jeremiah+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Jeremiah 1 Guide - Vine", description: "A deep guide to Jeremiah 1.", images: ["/api/og?title=Jeremiah+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
