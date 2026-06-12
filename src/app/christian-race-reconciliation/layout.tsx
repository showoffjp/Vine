import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Racial Reconciliation Guide",
  description: "The reconciliation theology of Ephesians 2, the history of the church and race, the distinction between reconciliation and racial justice, imago Dei as foundation, lament as first step, and what reconciliation actually requires.",
  openGraph: {
    title: "Christian Racial Reconciliation Guide — Vine",
    description: "The reconciliation theology of Ephesians 2, the history of the church and race, the distinction between reconciliation and racial justice, imago Dei as foundation, lament as first step, and what reconciliation actually requires.",
    images: ["/api/og?title=Christian+Racial+Reconciliation+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Racial Reconciliation Guide — Vine",
    description: "The reconciliation theology of Ephesians 2, the history of the church and race, the distinction between reconciliation and racial justice, imago Dei as foundation, lament as first step, and what reconciliation actually requires.",
    images: ["/api/og?title=Christian+Racial+Reconciliation+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
