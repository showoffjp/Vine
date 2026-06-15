import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 13 Guide - Christian Study",
  description: "A deep guide to Romans chapter 13 - submission to the governing authorities instituted by God, the debt of love that fulfills the whole law, and the urgency of casting off the works of darkness and putting on the armor of light because salvation is near.",
  openGraph: { title: "Romans 13 Guide - Vine", description: "A guide to Romans 13 - governing authorities, love as the fulfilling of the law, and the armor of light.", images: ["/api/og?title=Romans+13+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 13 Guide - Vine", description: "A deep guide to Romans chapter 13.", images: ["/api/og?title=Romans+13+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
