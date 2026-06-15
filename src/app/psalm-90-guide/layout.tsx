import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 90 Guide - Christian Study",
  description: "A deep guide to Psalm 90 - the prayer of Moses, the man of God, contrasting the eternity of God with the brevity of human life, the call to number our days for a heart of wisdom, and the prayer to establish the work of our hands.",
  openGraph: { title: "Psalm 90 Guide - Vine", description: "A guide to Psalm 90 - the prayer of Moses on mortality and the eternity of God.", images: ["/api/og?title=Psalm+90+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 90 Guide - Vine", description: "A deep guide to Psalm 90.", images: ["/api/og?title=Psalm+90+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
