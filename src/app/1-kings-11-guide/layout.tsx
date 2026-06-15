import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 11 Guide - Christian Study",
  description: "A deep guide to 1 Kings chapter 11 - the decline of Solomon through his foreign wives and idolatry, the adversaries Hadad and Rezon raised up against him, and the prophet Ahijah's word that the kingdom would be torn and given to Jeroboam.",
  openGraph: { title: "1 Kings 11 Guide - Vine", description: "A guide to 1 Kings 11 - Solomon's foreign wives and idolatry, the adversaries raised up, and Jeroboam and the torn kingdom.", images: ["/api/og?title=1+Kings+11+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 11 Guide - Vine", description: "A deep guide to 1 Kings chapter 11.", images: ["/api/og?title=1+Kings+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
