import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ephesians 4 Chapter Guide — Christian Study",
  description: "A deep guide to Ephesians 4 — walking worthy of the calling, the seven unities of the body, Christ's gifts of apostles and teachers to equip the saints, growing to the measure of the fullness of Christ, putting off the old self, and the ethics of holy living.",
  openGraph: { title: "Ephesians 4 Chapter Guide — Vine", description: "A guide to Ephesians 4 — unity, maturity, Christ's gifts to the church, and putting on the new self.", images: ["/api/og?title=Ephesians+4+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Ephesians 4 Chapter Guide — Vine", description: "A deep guide to Ephesians 4 — walk worthy, the seven unities, Christ's gifts, and the new self.", images: ["/api/og?title=Ephesians+4+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
