import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Proverbs Guide - Christian Study",
  description: "A deep guide to the Book of Proverbs - the fear of the Lord as the beginning of wisdom, the two paths of wisdom and folly, wisdom personified, practical wisdom for speech, money, work and relationships, and how Proverbs points to Christ the wisdom of God.",
  openGraph: { title: "Book of Proverbs Guide - Vine", description: "A guide to Proverbs - the fear of the Lord, the two paths, wisdom personified, and practical wisdom for life.", images: ["/api/og?title=Proverbs+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Proverbs Guide - Vine", description: "A deep guide to the Book of Proverbs.", images: ["/api/og?title=Proverbs+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
