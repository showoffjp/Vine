import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Fear",
  description: "Fear and the Christian faith - the most repeated command in the Bible (fear not), the difference between godly fear and sinful fear, the fear of death and judgment, perfect love casting out fear, and practical steps for facing fear with faith.",
  openGraph: { title: "Christian Guide to Fear - Vine", description: "Fear and faith - fear not, godly vs sinful fear, the fear of death, perfect love casting out fear, and facing fear with faith.", images: ["/api/og?title=Christian+Guide+to+Fear"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Fear - Vine", description: "Fear and the Christian faith.", images: ["/api/og?title=Christian+Guide+to+Fear"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
