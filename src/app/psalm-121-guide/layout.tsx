import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 121 Guide — Christian Study",
  description: "A deep guide to Psalm 121 — the Song of Ascents on God's keeping: lifting the eyes to the hills, finding help in the Maker of heaven and earth, the sleepless Keeper who guards your going out and your coming in from this time forth and forevermore.",
  openGraph: { title: "Psalm 121 Guide — Vine", description: "A guide to Psalm 121 — the pilgrim's song of God's protective keeping and the Lord who neither slumbers nor sleeps.", images: ["/api/og?title=Psalm+121+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 121 Guide — Vine", description: "A deep guide to Psalm 121, the Song of Ascents on God's keeping.", images: ["/api/og?title=Psalm+121+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
