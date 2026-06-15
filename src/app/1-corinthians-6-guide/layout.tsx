import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 6 Guide - Christian Study",
  description: "A deep guide to 1 Corinthians 6 - lawsuits among believers, the warning that the unrighteous will not inherit the kingdom, the washing and justification of the saints, and the call to flee sexual immorality and glorify God in the body.",
  openGraph: { title: "1 Corinthians 6 Guide - Vine", description: "A guide to 1 Corinthians 6 - lawsuits among believers, gospel transformation, and glorifying God in your body.", images: ["/api/og?title=1+Corinthians+6+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 6 Guide - Vine", description: "A deep guide to 1 Corinthians 6.", images: ["/api/og?title=1+Corinthians+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
