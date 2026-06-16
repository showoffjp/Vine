import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hebrews 6 Guide - Pressing On to Maturity and the Anchor of the Soul - Christian Study",
  description: "A deep study of Hebrews 6 - the call to leave the elementary doctrine and go on to maturity, the solemn warning passage of verses 4 to 6 and its major interpretive views, the parable of the fruitful field, God's unchangeable promise and oath, and hope as a sure and steadfast anchor of the soul that enters behind the curtain where Jesus has gone as a forerunner and high priest after the order of Melchizedek.",
  openGraph: { title: "Hebrews 6 Guide - The Anchor of the Soul - Vine", description: "Explore Hebrews 6 - pressing on to maturity, the severe warning against apostasy, the fruitfulness of genuine faith, God's two unchangeable things, and the anchor of hope that reaches behind the curtain.", images: ["/api/og?title=Hebrews+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 6 Guide - The Anchor of the Soul - Vine", description: "A deep study of Hebrews 6, the call to maturity, the warning passage, God's unbreakable oath, and the anchor of the soul behind the curtain.", images: ["/api/og?title=Hebrews+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
