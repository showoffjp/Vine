import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Christian Podcasts",
  description: "The 12 best Christian podcasts right now — curated for theology, devotional life, leadership, apologetics, and more. All real, all worth your commute.",
  openGraph: {
    title: "Top Christian Podcasts — Vine",
    description: "The 12 best Christian podcasts right now — curated for theology, devotional life, leadership, apologetics, and more. All real, all worth your commute.",
    images: ["/api/og?title=Top+Christian+Podcasts"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Christian Podcasts — Vine",
    description: "The 12 best Christian podcasts right now — curated for theology, devotional life, leadership, apologetics, and more. All real, all worth your commute.",
    images: ["/api/og?title=Top+Christian+Podcasts"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
