import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Count Your Blessings",
  description: "Research shows gratitude rewires the brain toward joy. Scripture commands it. Practice it daily.",
  openGraph: {
    title: "Count Your Blessings — Vine",
    description: "Research shows gratitude rewires the brain toward joy. Scripture commands it. Practice it daily.",
    images: ["/api/og?title=Count+Your+Blessings"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Count Your Blessings — Vine",
    description: "Research shows gratitude rewires the brain toward joy. Scripture commands it. Practice it daily.",
    images: ["/api/og?title=Count+Your+Blessings"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
