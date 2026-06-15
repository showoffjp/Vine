import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 19 Guide - Christian Study",
  description: "A deep guide to Psalm 19 - the heavens declaring the glory of God in wordless speech, the perfection of God's law reviving the soul and sweeter than honey, and David's closing prayer to be cleansed from hidden faults and kept from willful sin.",
  openGraph: { title: "Psalm 19 Guide - Vine", description: "A guide to Psalm 19 - the glory of God in creation, the perfection of his word, and a prayer for a cleansed heart.", images: ["/api/og?title=Psalm+19+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 19 Guide - Vine", description: "A deep guide to Psalm 19.", images: ["/api/og?title=Psalm+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
