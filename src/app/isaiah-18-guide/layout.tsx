import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 18 Guide - The Oracle Concerning Cush - Christian Study",
  description: "A deep study of Isaiah 18 - the oracle concerning the land beyond the rivers of Cush, the futility of frantic diplomacy apart from God, the LORD who quietly looks on like clear heat in sunshine before pruning the proud branches of the nations, and the climactic vision of tribute brought to Mount Zion. Explore the sovereignty of God over distant and powerful nations and the eschatological hope of the gathering of the Gentiles.",
  openGraph: { title: "Isaiah 18 Guide - The Oracle Concerning Cush - Vine", description: "A guide to Isaiah 18 - God's sovereignty over the nations, his patient watching, the pruning of judgment, and the gathering of the distant peoples to Zion.", images: ["/api/og?title=Isaiah+18+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 18 Guide - The Oracle Concerning Cush - Vine", description: "A deep study of Isaiah 18 and the gathering of the nations to Mount Zion.", images: ["/api/og?title=Isaiah+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
