import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hebrews 12 Guide — Run the Race",
  description: "A deep guide to Hebrews 12 — the cloud of witnesses, running the race with endurance, looking to Jesus the founder and perfecter of faith, the discipline of God as fatherly love, the contrast of Sinai and Mount Zion, and the unshakeable kingdom.",
  openGraph: { title: "Hebrews 12 Guide — Vine", description: "A guide to Hebrews 12 — the cloud of witnesses, the race of faith, God's fatherly discipline, and the kingdom that cannot be shaken.", images: ["/api/og?title=Hebrews+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 12 Guide — Vine", description: "A deep guide to Hebrews 12 — run the race, endure discipline, receive an unshakeable kingdom.", images: ["/api/og?title=Hebrews+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
