import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ministry of Intercession — Vine",
  description: "Intercession is the act of standing between God and another. A theological and practical guide to praying for others — Jesus as our intercessor, the Spirit interceding, standing in the gap, and building an intercession habit.",
  openGraph: {
    title: "The Ministry of Intercession — Vine",
    description: "Intercession is the act of standing between God and another. A theological and practical guide to praying for others — Jesus as our intercessor, the Spirit interceding, standing in the gap, and building an intercession habit.",
    images: ["/api/og?title=The+Ministry+of+Intercession"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ministry of Intercession — Vine",
    description: "Intercession is the act of standing between God and another. A theological and practical guide to praying for others — Jesus as our intercessor, the Spirit interceding, standing in the gap, and building an intercession habit.",
    images: ["/api/og?title=The+Ministry+of+Intercession"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
