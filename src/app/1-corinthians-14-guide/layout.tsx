import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 14 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 14 - Paul gives practical instruction on spiritual gifts in worship, ranking prophecy above uninterpreted tongues because it builds up the church, and calls for worship that is done decently and in order.",
  openGraph: { title: "1 Corinthians 14 Guide - Vine", description: "A guide to 1 Corinthians 14 - prophecy builds up the church, worship with mind and spirit, a sign to unbelievers, and orderly worship.", images: ["/api/og?title=1+Corinthians+14+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 14 Guide - Vine", description: "A deep guide to 1 Corinthians 14.", images: ["/api/og?title=1+Corinthians+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
