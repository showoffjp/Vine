import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Secret of Contentment — Vine",
  description: "Paul learned contentment — it is not a temperament but a discipline. Explore Philippians 4:11-13, Jeremiah Burroughs, godliness with contentment, and how to find sufficiency in Christ amid consumerism and want.",
  openGraph: {
    title: "The Secret of Contentment — Vine",
    description: "Paul learned contentment — it is not a temperament but a discipline. Explore Philippians 4:11-13, Jeremiah Burroughs, godliness with contentment, and how to find sufficiency in Christ amid consumerism and want.",
    images: ["/api/og?title=The+Secret+of+Contentment"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Secret of Contentment — Vine",
    description: "Paul learned contentment — it is not a temperament but a discipline. Explore Philippians 4:11-13, Jeremiah Burroughs, godliness with contentment, and how to find sufficiency in Christ amid consumerism and want.",
    images: ["/api/og?title=The+Secret+of+Contentment"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
