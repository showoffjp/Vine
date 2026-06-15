import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 7 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 7 - Paul on marriage and singleness, mutual conjugal duty, divorce and mixed marriages, remaining as called, and undivided devotion to the Lord.",
  openGraph: { title: "1 Corinthians 7 Guide - Vine", description: "A guide to 1 Corinthians 7 - marriage, singleness, and undivided devotion.", images: ["/api/og?title=1+Corinthians+7+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 7 Guide - Vine", description: "A deep guide to 1 Corinthians 7.", images: ["/api/og?title=1+Corinthians+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
