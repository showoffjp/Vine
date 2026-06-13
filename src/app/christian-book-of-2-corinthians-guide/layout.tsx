import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 2 Corinthians Guide - Christian Study",
  description: "A deep guide to Pauls Second Letter to the Corinthians - the God of all comfort, treasure in jars of clay, the ministry of reconciliation, the new creation, generous giving, and Pauls boasting in weakness and the thorn in the flesh.",
  openGraph: { title: "Book of 2 Corinthians Guide - Vine", description: "A guide to 2 Corinthians - the God of all comfort, treasure in jars of clay, the ministry of reconciliation, and strength in weakness.", images: ["/api/og?title=2+Corinthians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Corinthians Guide - Vine", description: "A deep guide to 2 Corinthians.", images: ["/api/og?title=2+Corinthians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
