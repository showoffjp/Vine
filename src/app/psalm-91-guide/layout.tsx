import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 91 Guide — Christian Study",
  description: "A deep guide to Psalm 91 — He who dwells in the shelter of the Most High, the Lord as refuge and fortress, deliverance from the snare of the fowler and the deadly pestilence, refuge under his wings, the charge given to angels, and God's promise to be with us in trouble.",
  openGraph: { title: "Psalm 91 Guide — Vine", description: "A guide to Psalm 91 — the shelter of the Most High, refuge and fortress, the charge of angels, and God's promise of protection.", images: ["/api/og?title=Psalm+91+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 91 Guide — Vine", description: "A deep guide to Psalm 91.", images: ["/api/og?title=Psalm+91+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
