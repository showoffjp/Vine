import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 6 Guide — Solomon Builds the Temple",
  description: "A deep guide to 1 Kings 6 — Solomon builds the Temple in Jerusalem 480 years after the Exodus, the dimensions and silent quarry-dressed construction, God's conditional word to Solomon, the gold-overlaid Most Holy Place, the great cherubim, and the seven-year completion of the house of the Lord.",
  openGraph: { title: "1 Kings 6 Guide — Vine", description: "A guide to 1 Kings 6 — Solomon builds the Temple, the silent construction, the Most Holy Place, the cherubim, and the completion of the house of the Lord.", images: ["/api/og?title=1+Kings+6+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 6 Guide — Vine", description: "A deep guide to 1 Kings 6 and the building of the Temple.", images: ["/api/og?title=1+Kings+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
