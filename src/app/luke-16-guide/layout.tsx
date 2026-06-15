import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 16 Guide - Christian Study",
  description: "A deep guide to Luke chapter 16 - the Parable of the Shrewd Manager and the wise use of worldly wealth, the rebuke of the money-loving Pharisees, the abiding authority of the Law and the kingdom, and the story of the Rich Man and Lazarus with its fixed gulf beyond death.",
  openGraph: { title: "Luke 16 Guide - Vine", description: "A guide to Luke 16 - the Shrewd Manager, serving God not money, and the Rich Man and Lazarus.", images: ["/api/og?title=Luke+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 16 Guide - Vine", description: "A deep guide to Luke chapter 16.", images: ["/api/og?title=Luke+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
