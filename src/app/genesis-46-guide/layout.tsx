import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 46 Guide - Christian Study",
  description: "A deep guide to Genesis chapter 46 - Jacob's journey to Egypt, God's reassurance at Beersheba, the seventy descendants who went down to Egypt, and the emotional reunion of Jacob and Joseph in Goshen.",
  openGraph: { title: "Genesis 46 Guide - Vine", description: "A guide to Genesis 46 - Jacob goes down to Egypt, the seventy souls, and the reunion with Joseph in Goshen.", images: ["/api/og?title=Genesis+46+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 46 Guide - Vine", description: "A deep guide to Genesis chapter 46.", images: ["/api/og?title=Genesis+46+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
