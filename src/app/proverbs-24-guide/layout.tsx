import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs Chapter 24 Guide - Wisdom, Strength, and Diligence | The Vine",
  description: "A deep guide to Proverbs 24 - wisdom over strength, not envying the wicked, rescuing the perishing, the righteous man who rises seven times, the sluggard's field, and building life on the foundation of God's wisdom.",
  openGraph: { title: "Proverbs 24 Guide - Wisdom Over Strength | The Vine", description: "A guide to Proverbs 24 - do not envy evil men, a wise man is mightier than a strong man, rescue those being taken away to death, and the sluggard's overgrown field.", images: ["/api/og?title=Proverbs+24+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 24 Guide - Wisdom Over Strength | The Vine", description: "A deep guide to Proverbs chapter 24.", images: ["/api/og?title=Proverbs+24+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
