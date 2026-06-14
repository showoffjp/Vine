import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Jude Guide — Christian Study",
  description: "A deep guide to the Book of Jude — the urgent call to contend for the faith once for all delivered, the exposure of false teachers who crept in unnoticed, the warnings drawn from the judgments of history, the exhortation to build yourselves up and keep in the love of God, and the magnificent closing doxology.",
  openGraph: { title: "Book of Jude Guide — Vine", description: "A guide to Jude — contending for the faith, false teachers exposed, warnings from history, building yourselves up, and the great doxology.", images: ["/api/og?title=Book+of+Jude+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Jude Guide — Vine", description: "A deep guide to the Book of Jude.", images: ["/api/og?title=Book+of+Jude+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
