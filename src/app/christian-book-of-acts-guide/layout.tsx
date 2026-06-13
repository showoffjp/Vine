import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Acts Guide — Christian Study",
  description: "A deep guide to the Acts of the Apostles — Pentecost and the birth of the church, the early Jerusalem community, the martyrdom of Stephen, the conversion of Paul, the gospel going to the Gentiles, Paul's missionary journeys, and how Acts shapes the church's mission.",
  openGraph: { title: "Book of Acts Guide — Vine", description: "A guide to Acts — Pentecost, the early church, the conversion of Paul, the Gentile mission, and Paul's journeys.", images: ["/api/og?title=Book+of+Acts+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Acts Guide — Vine", description: "A deep guide to the Acts of the Apostles.", images: ["/api/og?title=Book+of+Acts+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
