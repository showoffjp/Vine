import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 14 Guide - Christian Study",
  description: "A deep guide to Romans chapter 14 - welcoming the weak in faith without quarreling over disputable matters of food and days, refusing to judge or despise a fellow servant of the Lord, and letting love limit liberty so the kingdom of God is known in righteousness, peace, and joy in the Holy Spirit.",
  openGraph: { title: "Romans 14 Guide - Vine", description: "A guide to Romans 14 - the strong and the weak, do not judge, do not be a stumbling block, and build up one another in love.", images: ["/api/og?title=Romans+14+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 14 Guide - Vine", description: "A deep guide to Romans chapter 14.", images: ["/api/og?title=Romans+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
