import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Joshua 1 Guide — Be Strong and Courageous — Christian Study",
  description: "An in-depth guide to Joshua 1 — God's threefold commission to Joshua to be strong and courageous, the charge to meditate on the Book of the Law day and night, the promise of God's presence as Israel prepares to cross the Jordan and enter the Promised Land. Includes verse-by-verse study, theological reflection, and video teaching.",
  openGraph: { title: "Joshua 1 Guide — Be Strong and Courageous — Vine", description: "God's commission to Joshua: be strong and courageous, meditate on the Law, and know that the Lord your God is with you wherever you go.", images: ["/api/og?title=Joshua+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Joshua 1 Guide — Be Strong and Courageous — Vine", description: "An in-depth guide to Joshua 1 and God's threefold command to be strong and courageous.", images: ["/api/og?title=Joshua+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
