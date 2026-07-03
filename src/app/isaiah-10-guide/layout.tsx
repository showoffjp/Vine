import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 10 Guide - Christian Study",
  description: "A deep guide to Isaiah 10 - the rod of God's anger and the remnant of Israel: woe on unjust rulers, Assyria as the staff of God's fury, the axe that must not boast over its wielder, the return of the remnant who lean on the Holy One of Israel in truth, comfort for Zion, and the felled forest that prepares the stump of Jesse.",
  openGraph: { title: "Isaiah 10 Guide - Vine", description: "A guide to Isaiah 10 - God's sovereign use of Assyria, the judgment of human pride, and the remnant who lean on the Holy One of Israel.", images: ["/api/og?title=Isaiah+10+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 10 Guide - Vine", description: "A deep guide to Isaiah 10, the rod of God's anger and the remnant of Israel.", images: ["/api/og?title=Isaiah+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
