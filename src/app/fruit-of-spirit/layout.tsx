import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fruit of the Spirit",
  description: "'The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control' (Galatians 5:22-23). Nine qualities — singular fruit, plural manifestation.…",
  openGraph: {
    title: "Fruit of the Spirit — Vine",
    description: "'The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control' (Galatians 5:22-23). Nine qualities — singular fruit, plural manifestation.…",
    images: ["/api/og?title=Fruit+of+the+Spirit"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fruit of the Spirit — Vine",
    description: "'The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control' (Galatians 5:22-23). Nine qualities — singular fruit, plural manifestation.…",
    images: ["/api/og?title=Fruit+of+the+Spirit"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
