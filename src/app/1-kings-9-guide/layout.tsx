import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 9 Guide - Christian Study",
  description: "A deep guide to 1 Kings chapter 9 - the Lord's second appearance to Solomon with the conditional covenant, the strained alliance with Hiram and the cities of Cabul, Solomon's forced labor and vast building projects, and the fleet at Ezion-geber sailing to Ophir for gold.",
  openGraph: { title: "1 Kings 9 Guide - Vine", description: "A guide to 1 Kings 9 - God's second appearance to Solomon, the cities of Cabul, forced labor and building, and the ships of Ophir.", images: ["/api/og?title=1+Kings+9+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 9 Guide - Vine", description: "A deep guide to 1 Kings chapter 9.", images: ["/api/og?title=1+Kings+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
