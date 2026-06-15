import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 12 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Corinthians 12 — spiritual gifts and the body of Christ, one Spirit distributing many gifts, the body with many members each indispensable, and the pointer toward a still more excellent way.",
  openGraph: { title: "1 Corinthians 12 Chapter Guide — Vine", description: "Spiritual gifts and the body of Christ — a guide to 1 Corinthians 12 on the gifts of the Spirit, unity, interdependence, and the way of love.", images: ["/api/og?title=1+Corinthians+12+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 12 Chapter Guide — Vine", description: "A deep guide to 1 Corinthians 12 — spiritual gifts and the body of Christ.", images: ["/api/og?title=1+Corinthians+12+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
