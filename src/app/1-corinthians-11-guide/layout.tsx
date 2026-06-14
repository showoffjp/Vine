import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Corinthians 11 Guide — The Lord's Supper — Christian Study",
  description: "A deep guide to 1 Corinthians 11 — Paul corrects the Corinthian church's abuse of the Lord's Supper, transmits the earliest written account of the institution of communion, calls believers to discern the body, examine themselves, and proclaim the Lord's death in bread and cup until he comes again.",
  openGraph: { title: "1 Corinthians 11 Guide — The Lord's Supper — Vine", description: "Guide to 1 Corinthians 11: Paul's teaching on the institution and proper observance of the Lord's Supper, self-examination, and proclaiming Christ's death.", images: ["/api/og?title=1+Corinthians+11+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 11 Guide — The Lord's Supper — Vine", description: "A deep guide to 1 Corinthians 11 and Paul's teaching on the institution and proper observance of the Lord's Supper.", images: ["/api/og?title=1+Corinthians+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
