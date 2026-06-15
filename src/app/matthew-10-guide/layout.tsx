import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 10 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 10 - the calling and sending of the Twelve apostles, the mission charge to the lost sheep of Israel, warnings of persecution among wolves, the threefold call not to fear, and the cost of taking up the cross to follow Christ.",
  openGraph: { title: "Matthew 10 Guide - Vine", description: "A guide to Matthew 10 - the sending of the Twelve, persecution foretold, do not fear, and the cost of discipleship.", images: ["/api/og?title=Matthew+10+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 10 Guide - Vine", description: "A deep guide to Matthew chapter 10.", images: ["/api/og?title=Matthew+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
