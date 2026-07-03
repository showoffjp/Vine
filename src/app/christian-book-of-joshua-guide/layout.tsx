import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Joshua Guide - Christian Study",
  description: "A deep guide to the Book of Joshua - entering the Promised Land, the crossing of the Jordan, the fall of Jericho, the conquest of Canaan, the difficult questions of holy war, the division of the land, and the call to choose whom you will serve.",
  openGraph: { title: "Book of Joshua Guide - Vine", description: "A guide to Joshua - entering the Promised Land, the crossing of the Jordan, Jericho, the conquest, and choosing whom to serve.", images: ["/api/og?title=Joshua+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Joshua Guide - Vine", description: "A deep guide to the Book of Joshua.", images: ["/api/og?title=Joshua+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
