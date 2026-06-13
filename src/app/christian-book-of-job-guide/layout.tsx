import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Job Guide - Christian Study",
  description: "A deep guide to the Book of Job - the problem of innocent suffering, the heavenly wager, the failure of Jobs friends, Jobs honest lament, the whirlwind speeches of God, and what Job teaches about suffering, faith, and the sovereignty of God.",
  openGraph: { title: "Book of Job Guide - Vine", description: "A guide to Job - innocent suffering, the heavenly wager, Jobs friends, the whirlwind speeches, and the sovereignty of God.", images: ["/api/og?title=Job+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Job Guide - Vine", description: "A deep guide to the Book of Job.", images: ["/api/og?title=Job+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
