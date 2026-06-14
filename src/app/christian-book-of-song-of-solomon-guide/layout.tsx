import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Song of Solomon Guide — Christian Study",
  description: "A deep guide to the Song of Solomon (Song of Songs) — the celebration of love and marriage as a good gift of God, the dialogue of the lover and the beloved, the call not to awaken love before its time, the declaration that love is strong as death, and the church's reading of the Song as a picture of Christ's love for his bride.",
  openGraph: { title: "Song of Solomon Guide — Vine", description: "A guide to the Song of Songs — the celebration of love, the beloved and the bride, love strong as death, and Christ and the church.", images: ["/api/og?title=Song+of+Solomon+Guide"] },
  twitter: { card: "summary_large_image", title: "Song of Solomon Guide — Vine", description: "A deep guide to the Song of Solomon.", images: ["/api/og?title=Song+of+Solomon+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
