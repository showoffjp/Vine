import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 2 Timothy Guide - Christian Study",
  description: "A deep guide to Pauls Second Letter to Timothy - Pauls final words from prison, guarding the gospel, enduring hardship as a good soldier, the inspiration of Scripture, and finishing the race well.",
  openGraph: { title: "Book of 2 Timothy Guide - Vine", description: "A guide to 2 Timothy - Pauls final words, guarding the gospel, enduring hardship, the inspiration of Scripture, and finishing well.", images: ["/api/og?title=2+Timothy+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Timothy Guide - Vine", description: "A deep guide to the Second Letter to Timothy.", images: ["/api/og?title=2+Timothy+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
