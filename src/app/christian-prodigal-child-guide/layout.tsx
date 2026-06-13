import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide for Parents of Prodigal Children",
  description: "When a child walks away from faith — the parable of the prodigal son as a parent's guide, the theology of free will and parental responsibility, how to pray for a prodigal, maintaining relationship without enabling, navigating grief, shame, and hope.",
  openGraph: { title: "Christian Prodigal Child Guide — Vine", description: "When a child walks away from faith — theology, prayer, relationship, and hope.", images: ["/api/og?title=Christian+Prodigal+Child+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Prodigal Child Guide — Vine", description: "When a child walks away from faith — theology, prayer, and hope.", images: ["/api/og?title=Christian+Prodigal+Child+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
