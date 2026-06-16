import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Corinthians 6 Guide - Now Is the Day of Salvation - Christian Study",
  description: "A deep study guide to 2 Corinthians 6 - the urgent appeal not to receive the grace of God in vain, the day of salvation that is now, the paradoxes of cruciform ministry, the open heart of the apostle, and the call to be the temple of the living God, unequally yoked with no one.",
  openGraph: { title: "2 Corinthians 6 Guide - Now Is the Day of Salvation - Vine", description: "Study 2 Corinthians 6 - the day of salvation, the paradoxes of ministry, and the call to holiness as the temple of the living God.", images: ["/api/og?title=2+Corinthians+6+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 6 Guide - Now Is the Day of Salvation - Vine", description: "A deep guide to 2 Corinthians 6 - now is the day of salvation, the cruciform life, and the temple of the living God.", images: ["/api/og?title=2+Corinthians+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
