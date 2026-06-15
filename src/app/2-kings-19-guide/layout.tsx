import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Kings 19 Guide - Christian Study",
  description: "A deep guide to 2 Kings 19 - Hezekiah seeking Isaiah, his great prayer spreading Sennacherib's letter before the Lord, the Lord's answer against Assyria's pride, and the angel of the Lord striking 185,000 to deliver Jerusalem.",
  openGraph: { title: "2 Kings 19 Guide - Vine", description: "A guide to 2 Kings 19 - Hezekiah's prayer and the fall of Sennacherib.", images: ["/api/og?title=2+Kings+19+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 19 Guide - Vine", description: "A deep guide to 2 Kings 19.", images: ["/api/og?title=2+Kings+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
