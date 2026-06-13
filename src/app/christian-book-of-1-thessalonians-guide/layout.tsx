import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Thessalonians Guide - Christian Study",
  description: "A deep guide to Pauls First Letter to the Thessalonians - a model church, living to please God, holiness and brotherly love, the return of Christ and the resurrection of believers, and encouragement to a young persecuted church.",
  openGraph: { title: "Book of 1 Thessalonians Guide - Vine", description: "A guide to 1 Thessalonians - a model church, holiness, brotherly love, and the return of Christ.", images: ["/api/og?title=1+Thessalonians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Thessalonians Guide - Vine", description: "A deep guide to 1 Thessalonians.", images: ["/api/og?title=1+Thessalonians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
