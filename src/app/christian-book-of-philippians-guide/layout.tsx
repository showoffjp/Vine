import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Philippians Guide — Christian Study",
  description: "A deep guide to Paul's Letter to the Philippians — the epistle of joy written from prison, partnership in the gospel, the great Christ hymn of Philippians 2, pressing on toward the goal, rejoicing in the Lord always, and the peace that surpasses understanding.",
  openGraph: { title: "Book of Philippians Guide — Vine", description: "A guide to Philippians — the epistle of joy, the Christ hymn, pressing on, rejoicing always, and the peace of God.", images: ["/api/og?title=Philippians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Philippians Guide — Vine", description: "A deep guide to Philippians.", images: ["/api/og?title=Philippians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
