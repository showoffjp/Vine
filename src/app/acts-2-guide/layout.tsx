import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 2 Guide — The Day of Pentecost",
  description: "A deep guide to Acts 2 — the rushing mighty wind and tongues of fire, Peter's sermon citing Joel and the Psalms, the resurrection of Christ from Psalm 16, three thousand souls added, and the birth of the apostolic community.",
  openGraph: { title: "Acts 2 Guide — The Vine", description: "A guide to Acts 2 — Pentecost, Peter's sermon, Psalm 16 and the resurrection, Psalm 110, repentance and baptism, and three thousand souls added.", images: ["/api/og?title=Acts+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 2 Guide — The Vine", description: "A deep guide to Acts 2 — the Day of Pentecost and Peter's sermon.", images: ["/api/og?title=Acts+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
