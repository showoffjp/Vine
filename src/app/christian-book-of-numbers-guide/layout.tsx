import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Numbers Guide - Christian Study",
  description: "A deep guide to the Book of Numbers - the census and the camp, Israel's grumbling in the wilderness, the failure of the twelve spies at Kadesh-barnea, the forty years of wandering, Balaam and Balak, and the new generation poised to enter the Promised Land.",
  openGraph: { title: "Book of Numbers Guide - Vine", description: "A guide to Numbers - the camp, grumbling in the wilderness, the twelve spies, forty years of wandering, and the new generation.", images: ["/api/og?title=Book+of+Numbers+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Numbers Guide - Vine", description: "A deep guide to the Book of Numbers.", images: ["/api/og?title=Book+of+Numbers+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
