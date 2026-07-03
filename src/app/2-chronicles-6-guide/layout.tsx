import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Chronicles 6 Chapter Guide - Solomon's Temple Dedication | The Vine",
  description: "A deep guide to 2 Chronicles 6 — Solomon's prayer of Temple dedication, acknowledging God's faithfulness to David, the theological mystery of 'will God dwell on earth?' (the heaven of heavens cannot contain You), seven petitions for forgiveness including drought, defeat, and exile, and Solomon's humility before God's transcendence and immanence.",
  openGraph: { title: "2 Chronicles 6 Chapter Guide - Solomon's Temple Dedication | The Vine", description: "2 Chronicles 6: Solomon's prayer, the heaven of heavens cannot contain You, and God's covenant faithfulness.", images: ["/api/og?title=2+Chronicles+6+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Chronicles 6 Chapter Guide | The Vine", description: "A deep guide to 2 Chronicles 6 — Solomon's Temple dedication prayer.", images: ["/api/og?title=2+Chronicles+6+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
