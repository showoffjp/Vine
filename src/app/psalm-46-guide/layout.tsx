import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 46 Guide — Christian Study",
  description: "A deep guide to Psalm 46 — God our refuge and strength, the river that makes glad the city of God, the raging of the nations, the command to be still and know that he is God, and the refrain that the Lord of hosts is with us. The psalm that inspired Luther's 'A Mighty Fortress Is Our God.'",
  openGraph: { title: "Psalm 46 Guide — Vine", description: "A guide to Psalm 46 — God our refuge and strength, the river of gladness, the raging nations, and the call to be still and know that he is God.", images: ["/api/og?title=Psalm+46+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 46 Guide — Vine", description: "A deep guide to Psalm 46.", images: ["/api/og?title=Psalm+46+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
