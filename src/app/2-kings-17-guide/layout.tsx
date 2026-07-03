import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 17 Guide - Christian Study",
  description: "A deep guide to 2 Kings 17 - the fall of the northern kingdom of Israel, the three-year siege of Samaria, the long theological verdict on why Israel was exiled, and the syncretistic origins of the Samaritans.",
  openGraph: { title: "2 Kings 17 Guide - Vine", description: "A guide to 2 Kings 17 - the fall of Samaria, the reasons for Israel's exile, and the origin of the Samaritans.", images: ["/api/og?title=2+Kings+17+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 17 Guide - Vine", description: "A deep guide to 2 Kings 17.", images: ["/api/og?title=2+Kings+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
