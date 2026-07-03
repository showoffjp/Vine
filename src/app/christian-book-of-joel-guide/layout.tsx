import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Joel Guide — Christian Study",
  description: "A deep guide to the Book of Joel — the devastating locust plague as a picture of judgment, the call to return to the Lord and rend your heart, the coming Day of the Lord, the great promise of the Spirit poured out on all flesh, and the final restoration and blessing of God's people.",
  openGraph: { title: "Book of Joel Guide — Vine", description: "A guide to Joel — the locust plague, the call to repentance, the Day of the Lord, the outpouring of the Spirit, and the restoration of God's people.", images: ["/api/og?title=Book+of+Joel+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Joel Guide — Vine", description: "A deep guide to the Book of Joel.", images: ["/api/og?title=Book+of+Joel+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
