import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Hosea Guide — Christian Study",
  description: "A deep guide to the Book of Hosea — God's command for Hosea to marry Gomer as a living parable, Israel's spiritual adultery, the covenant lawsuit against a faithless people, the discipline of judgment, and God's tender, relentless, redeeming love that will not let his people go.",
  openGraph: { title: "Book of Hosea Guide — Vine", description: "A guide to Hosea — the prophet's marriage, Israel's unfaithfulness, the covenant lawsuit, judgment, and relentless love.", images: ["/api/og?title=Book+of+Hosea+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Hosea Guide — Vine", description: "A deep guide to the Book of Hosea.", images: ["/api/og?title=Book+of+Hosea+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
