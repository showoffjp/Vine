import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians Chapter 1 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians chapter 1 - Paul's appeal for unity against factionalism, the word of the cross as folly to the perishing and the power of God to the saved, Christ crucified as the wisdom and power of God, and God's choosing of the weak so that no one may boast.",
  openGraph: { title: "1 Corinthians 1 Guide - Vine", description: "A guide to 1 Corinthians 1 - the cross as the wisdom and power of God, and boasting only in the Lord.", images: ["/api/og?title=1+Corinthians+1+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 1 Guide - Vine", description: "A deep guide to 1 Corinthians chapter 1.", images: ["/api/og?title=1+Corinthians+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
