import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 3 Guide — Silver and Gold Have I None — Christian Study",
  description: "A deep Bible study guide to Acts 3 — Peter and John heal a man lame from birth at the Beautiful Gate of the Temple, declaring 'Silver and gold have I none; but what I have I give thee: In the name of Jesus Christ of Nazareth rise up and walk.' Explore the miracle, Peter's bold sermon at Solomon's Portico, the call to repentance, and the times of refreshing from the presence of the Lord.",
  openGraph: { title: "Acts 3 Guide — Silver and Gold Have I None — Vine", description: "Study Acts 3: Peter heals the lame man at the Beautiful Gate and proclaims the risen Christ at Solomon's Portico.", images: ["/api/og?title=Acts+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 3 Guide — Silver and Gold Have I None — Vine", description: "A deep guide to Acts 3: the healing at the Beautiful Gate and Peter's bold proclamation of the risen Christ.", images: ["/api/og?title=Acts+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
