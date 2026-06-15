import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 21 Guide - Christian Study",
  description: "A deep guide to Luke chapter 21 - the poor widow's offering, the prophecy of the temple's destruction, the Olivet teaching on signs and persecution, the fall of Jerusalem, the coming of the Son of Man, and the call to watchfulness and prayer.",
  openGraph: { title: "Luke 21 Guide - Vine", description: "A guide to Luke 21 - the widow's mite, the Olivet discourse, and the coming of the Son of Man.", images: ["/api/og?title=Luke+21+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 21 Guide - Vine", description: "A deep guide to Luke chapter 21.", images: ["/api/og?title=Luke+21+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
