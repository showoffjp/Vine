import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 28 Guide - Christian Study",
  description: "A deep guide to Acts chapter 28 - shipwreck on Malta and the viper that did Paul no harm, the healing of the father of Publius and the sick of the island, the final journey to Rome, and Paul proclaiming the kingdom of God with all boldness and without hindrance.",
  openGraph: { title: "Acts 28 Guide - Vine", description: "A guide to Acts 28 - Malta and the viper, the journey to Rome, and Paul preaching the kingdom.", images: ["/api/og?title=Acts+28+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 28 Guide - Vine", description: "A deep guide to Acts chapter 28.", images: ["/api/og?title=Acts+28+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
