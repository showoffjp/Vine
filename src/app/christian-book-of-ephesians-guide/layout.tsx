import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Ephesians Guide — Christian Study",
  description: "A deep guide to Paul's Letter to the Ephesians — every spiritual blessing in Christ, salvation by grace through faith, one new humanity, the unity of the church, the mystery of marriage, and the whole armor of God.",
  openGraph: { title: "Book of Ephesians Guide — Vine", description: "A guide to Ephesians — blessings in Christ, grace, one new humanity, the church, marriage, and the armor of God.", images: ["/api/og?title=Ephesians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Ephesians Guide — Vine", description: "A deep guide to Ephesians.", images: ["/api/og?title=Ephesians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
