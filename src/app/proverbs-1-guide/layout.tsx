import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs 1 Chapter Guide – Fear of the Lord, Lady Wisdom | The Vine",
  description: "A deep guide to Proverbs 1 — the prologue establishing the fear of the LORD as wisdom’s foundation, the personified Lady Wisdom crying out in the streets, and warnings against the way of sinners who set a trap for themselves.",
  openGraph: { title: "Proverbs 1 Chapter Guide – Fear of the Lord, Lady Wisdom | The Vine", description: "Explore Proverbs 1: the fear of the LORD as wisdom’s beginning, Lady Wisdom’s public cry, and the father’s warning against sinners.", images: ["/api/og?title=Proverbs+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 1 Chapter Guide | The Vine", description: "Proverbs 1: fear of the LORD, Lady Wisdom, and warnings against the way of folly.", images: ["/api/og?title=Proverbs+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
