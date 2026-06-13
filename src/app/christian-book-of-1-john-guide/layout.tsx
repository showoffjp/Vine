import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 John Guide - Christian Study",
  description: "A deep guide to the First Letter of John - God is light, walking in the light and confessing sin, God is love, the tests of genuine faith, assurance of salvation, love for one another, and overcoming the world. The epistle of assurance.",
  openGraph: { title: "Book of 1 John Guide - Vine", description: "A guide to 1 John - God is light, God is love, the tests of genuine faith, and the assurance of salvation.", images: ["/api/og?title=1+John+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 John Guide - Vine", description: "A deep guide to the First Letter of John.", images: ["/api/og?title=1+John+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
