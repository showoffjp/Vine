import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ezekiel 36 Chapter Guide — Christian Study",
  description: "A deep guide to Ezekiel 36 — God's promise to Israel of a new heart and new spirit, cleansing from idols, the indwelling Spirit moving them to follow his decrees, and the land restored like the Garden of Eden, all for the sake of his holy name.",
  openGraph: { title: "Ezekiel 36 Chapter Guide — Vine", description: "A guide to Ezekiel 36 — new heart, new spirit, cleansing, the Spirit within, and the land like the Garden of Eden.", images: ["/api/og?title=Ezekiel+36+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Ezekiel 36 Chapter Guide — Vine", description: "A deep guide to Ezekiel 36 — God's promise of a new heart, new spirit, and restoration of Israel.", images: ["/api/og?title=Ezekiel+36+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
