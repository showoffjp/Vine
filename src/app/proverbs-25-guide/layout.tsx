import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs Chapter 25 Guide - Court Wisdom and the Well-Timed Word | The Vine",
  description: "A deep guide to Proverbs 25 - Hezekiah's scribal collection, royal wisdom, the power of a word fitly spoken, practical enemy-love (coals of fire), self-control, and the city without walls.",
  openGraph: { title: "Proverbs 25 Guide - Court Wisdom and the Timely Word | The Vine", description: "A guide to Proverbs 25 - apples of gold in settings of silver, feeding your enemy, the city without walls, and the wisdom of self-control.", images: ["/api/og?title=Proverbs+25+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 25 Guide - Court Wisdom | The Vine", description: "A deep guide to Proverbs chapter 25 - the second Solomonic collection preserved by Hezekiah's men.", images: ["/api/og?title=Proverbs+25+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
