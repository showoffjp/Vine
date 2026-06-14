import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Judges 6 Guide — Christian Study",
  description: "A deep guide to Judges 6 — Israel oppressed by Midian for seven years, the angel of the LORD appearing to Gideon in a winepress, the call of Gideon as a mighty man of valor, tearing down the altar of Baal, and the double fleece test confirming God's calling.",
  openGraph: { title: "Judges 6 Guide — Vine", description: "A guide to Judges 6 — Midianite oppression, the call of Gideon, tearing down the altar of Baal, and the fleece test.", images: ["/api/og?title=Judges+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Judges 6 Guide — Vine", description: "A deep guide to Judges 6 — the call of Gideon.", images: ["/api/og?title=Judges+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
