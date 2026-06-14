import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Corinthians 12 Guide — Christian Study",
  description: "A deep guide to 2 Corinthians 12 — Paul caught up to paradise, the thorn in the flesh, his threefold plea, and the Lord's answer: my grace is sufficient for you, for my power is made perfect in weakness.",
  openGraph: { title: "2 Corinthians 12 Guide — Vine", description: "A guide to 2 Corinthians 12 — the thorn in the flesh, sufficient grace, and power made perfect in weakness.", images: ["/api/og?title=2+Corinthians+12+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 12 Guide — Vine", description: "A deep guide to 2 Corinthians 12 — boasting in weakness.", images: ["/api/og?title=2+Corinthians+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
