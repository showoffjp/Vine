import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Examen",
  description: "The Ignatian Examen is a 15-minute daily prayer review developed by St. Ignatius of Loyola — one of the most powerful practices in Christian spiritual formation.",
  openGraph: {
    title: "Daily Examen — Vine",
    description: "The Ignatian Examen is a 15-minute daily prayer review developed by St. Ignatius of Loyola — one of the most powerful practices in Christian spiritual formation.",
    images: ["/api/og?title=Daily+Examen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Examen — Vine",
    description: "The Ignatian Examen is a 15-minute daily prayer review developed by St. Ignatius of Loyola — one of the most powerful practices in Christian spiritual formation.",
    images: ["/api/og?title=Daily+Examen"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
