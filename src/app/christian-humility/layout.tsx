import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Humility: The Christian Virtue — Vine",
  description: "Humility is not thinking less of yourself but thinking of yourself less. A theological and practical guide to the Christian virtue of humility — Philippians 2, kenosis, servant leadership, and dying to self.",
  openGraph: {
    title: "Humility: The Christian Virtue — Vine",
    description: "Humility is not thinking less of yourself but thinking of yourself less. A theological and practical guide to the Christian virtue of humility — Philippians 2, kenosis, servant leadership, and dying to self.",
    images: ["/api/og?title=Humility%3A+The+Christian+Virtue"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humility: The Christian Virtue — Vine",
    description: "Humility is not thinking less of yourself but thinking of yourself less. A theological and practical guide to the Christian virtue of humility — Philippians 2, kenosis, servant leadership, and dying to self.",
    images: ["/api/og?title=Humility%3A+The+Christian+Virtue"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
