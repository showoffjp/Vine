import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Titus 2 Guide — Grace That Trains Us — Christian Study",
  description: "A deep guide to Titus 2 — the grace of God that trains believers to renounce ungodliness and live godly, self-controlled, upright lives in the present age, while waiting for the blessed hope of the appearing of Jesus Christ.",
  openGraph: { title: "Titus 2 Guide — Grace That Trains Us — Vine", description: "A guide to Titus 2 — sound doctrine, the grace of God that trains us, godly living for all ages, and the blessed hope.", images: ["/api/og?title=Titus+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Titus 2 Guide — Grace That Trains Us — Vine", description: "A deep guide to Titus 2 and the grace that trains believers to live godly lives.", images: ["/api/og?title=Titus+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
