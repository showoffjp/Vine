import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Fruit of the Spirit",
  description: "Nine facets of a single harvest — the character of Christ formed in us by the Holy Spirit. Not works we produce by effort, but fruit we bear by abiding in the Vine.",
  openGraph: {
    title: "The Fruit of the Spirit — Vine",
    description: "Nine facets of a single harvest — the character of Christ formed in us by the Holy Spirit. Not works we produce by effort, but fruit we bear by abiding in the Vine.",
    images: ["/api/og?title=The+Fruit+of+the+Spirit"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fruit of the Spirit — Vine",
    description: "Nine facets of a single harvest — the character of Christ formed in us by the Holy Spirit. Not works we produce by effort, but fruit we bear by abiding in the Vine.",
    images: ["/api/og?title=The+Fruit+of+the+Spirit"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
