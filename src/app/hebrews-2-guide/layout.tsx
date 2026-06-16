import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hebrews Chapter 2 Guide - Christian Study",
  description: "A deep guide to Hebrews chapter 2 - the first warning against drifting from so great a salvation, Psalm 8 and the destiny of humanity fulfilled in Jesus, the pioneer of salvation perfected through suffering, the incarnation and victory over death and the devil, and the merciful and faithful high priest who makes propitiation for sins.",
  openGraph: { title: "Hebrews 2 Guide - Vine", description: "A guide to Hebrews 2 - so great a salvation and the pioneer of our salvation.", images: ["/api/og?title=Hebrews+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 2 Guide - Vine", description: "A deep guide to Hebrews chapter 2.", images: ["/api/og?title=Hebrews+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
