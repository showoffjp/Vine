import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs 4 Guide - Christian Study",
  description: "A deep guide to Proverbs 4 - a father's earnest appeal to embrace wisdom above all, to walk the path of the righteous rather than the wicked, and to guard the heart, for from it flow the springs of life.",
  openGraph: { title: "Proverbs 4 Guide - Vine", description: "A guide to Proverbs 4 - get wisdom above all, the two paths of the righteous and the wicked, and the call to guard your heart.", images: ["/api/og?title=Proverbs+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 4 Guide - Vine", description: "A deep guide to Proverbs 4.", images: ["/api/og?title=Proverbs+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
