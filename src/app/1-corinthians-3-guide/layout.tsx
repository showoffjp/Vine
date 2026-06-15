import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 3 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Corinthians 3 — Paul confronts spiritual immaturity at Corinth, reframes Paul and Apollos as God's servants, identifies Christ as the only foundation, warns builders whose work will be tested by fire, and declares the church to be God's holy temple.",
  openGraph: { title: "1 Corinthians 3 Chapter Guide — Vine", description: "A guide to 1 Corinthians 3 — spiritual maturity, Christ the foundation, God's temple, and the builder's test.", images: ["/api/og?title=1+Corinthians+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 3 Chapter Guide — Vine", description: "A deep guide to 1 Corinthians 3 — building on the foundation of Christ.", images: ["/api/og?title=1+Corinthians+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
