import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 16 Guide - The Plea for Moab and the Throne of Steadfast Love - Christian Study",
  description: "A deep study guide to Isaiah 16 - the counsel to send the lamb to Zion, the plea for refuge, the messianic throne established in steadfast love in the tent of David, the pride of Moab, the prophet's lament, and the time-stamped word of judgment within three years.",
  openGraph: { title: "Isaiah 16 Guide - The Throne of Steadfast Love - Vine", description: "Study Isaiah 16 - refuge in Zion, the pride of Moab, the messianic throne of steadfast love, and the certainty of judgment.", images: ["/api/og?title=Isaiah+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 16 Guide - The Throne of Steadfast Love - Vine", description: "A deep guide to Isaiah 16 - the plea for Moab, the throne of steadfast love, and divine compassion in judgment.", images: ["/api/og?title=Isaiah+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
