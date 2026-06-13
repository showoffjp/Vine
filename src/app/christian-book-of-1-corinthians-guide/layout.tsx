import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Corinthians Guide — Christian Study",
  description: "A deep guide to Paul's First Letter to the Corinthians — divisions in the church, the wisdom of the cross, sexual ethics and the body, freedom and love, spiritual gifts, the great love chapter (1 Corinthians 13), and the resurrection of the dead (1 Corinthians 15).",
  openGraph: { title: "Book of 1 Corinthians Guide — Vine", description: "A guide to 1 Corinthians — divisions, the wisdom of the cross, the body, spiritual gifts, love, and the resurrection.", images: ["/api/og?title=1+Corinthians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Corinthians Guide — Vine", description: "A deep guide to 1 Corinthians.", images: ["/api/og?title=1+Corinthians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
