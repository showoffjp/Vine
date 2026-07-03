import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Ruth Guide - Christian Study",
  description: "A deep guide to the Book of Ruth - a story of loyalty and redemption, Naomis bitterness and loss, Ruths famous pledge, Boaz the kinsman-redeemer, and how this quiet story fits into the lineage of King David and Jesus.",
  openGraph: { title: "Book of Ruth Guide - Vine", description: "A guide to Ruth - loyalty and redemption, Ruths pledge, Boaz the kinsman-redeemer, and the line of David.", images: ["/api/og?title=Ruth+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Ruth Guide - Vine", description: "A deep guide to the Book of Ruth.", images: ["/api/og?title=Ruth+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
