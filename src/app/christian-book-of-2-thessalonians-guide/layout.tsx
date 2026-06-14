import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 2 Thessalonians Guide — Christian Study",
  description: "A deep guide to the Book of 2 Thessalonians — Paul's comfort to a persecuted church, the certainty of the day of the Lord, the revealing of the man of lawlessness, the call to stand firm in apostolic truth, and his correction of those who had stopped working while waiting for Christ.",
  openGraph: { title: "Book of 2 Thessalonians Guide — Vine", description: "A guide to 2 Thessalonians — comfort in persecution, the day of the Lord, the man of lawlessness, standing firm, and a warning against idleness.", images: ["/api/og?title=Book+of+2+Thessalonians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Thessalonians Guide — Vine", description: "A deep guide to the Book of 2 Thessalonians.", images: ["/api/og?title=Book+of+2+Thessalonians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
