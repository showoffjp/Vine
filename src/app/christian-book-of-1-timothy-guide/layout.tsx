import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Timothy Guide - Christian Study",
  description: "A deep guide to Pauls First Letter to Timothy - sound doctrine and false teachers, instructions for worship and church order, qualifications for elders and deacons, godliness with contentment, and fighting the good fight of faith.",
  openGraph: { title: "Book of 1 Timothy Guide - Vine", description: "A guide to 1 Timothy - sound doctrine, church order, qualifications for leaders, godliness with contentment, and the good fight.", images: ["/api/og?title=1+Timothy+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Timothy Guide - Vine", description: "A deep guide to the First Letter to Timothy.", images: ["/api/og?title=1+Timothy+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
