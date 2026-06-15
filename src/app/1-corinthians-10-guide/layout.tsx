import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 10 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Corinthians 10 — warnings from Israel's wilderness history, the spiritual food and rock that was Christ, fleeing idolatry, the five sins that destroyed thousands, God's faithful way of escape from temptation, and doing all things to the glory of God.",
  openGraph: { title: "1 Corinthians 10 Chapter Guide — Vine", description: "A guide to 1 Corinthians 10 — Israel's example, the spiritual Rock that was Christ, warnings against idolatry, the way of escape, and glory to God in all things.", images: ["/api/og?title=1+Corinthians+10+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 10 Chapter Guide — Vine", description: "A deep guide to 1 Corinthians 10 — Israel's example, flee idolatry, and do all to the glory of God.", images: ["/api/og?title=1+Corinthians+10+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
