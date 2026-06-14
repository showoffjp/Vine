import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 139 Guide — Fearfully and Wonderfully Made",
  description: "A deep guide to Psalm 139 — the God who has searched and known us, the omnipresence from which we cannot flee, the wonder of being fearfully and wonderfully made in the womb, the preciousness of God's thoughts, and the closing prayer, Search me, O God, and know my heart.",
  openGraph: { title: "Psalm 139 Guide — Vine", description: "A guide to Psalm 139 — God's omniscience, omnipresence, the dignity of every life, and the prayer Search me, O God.", images: ["/api/og?title=Psalm+139+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 139 Guide — Vine", description: "A deep guide to Psalm 139 — Fearfully and Wonderfully Made.", images: ["/api/og?title=Psalm+139+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
