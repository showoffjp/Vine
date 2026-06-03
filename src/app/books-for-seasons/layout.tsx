import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books for Every Season of Life",
  description: "The right book at the right moment is a gift. Here are the best Christian books for specific life seasons — grief, doubt, marriage, suffering, dryness, and new faith — chosen for their proven power…",
  openGraph: {
    title: "Books for Every Season of Life — Vine",
    description: "The right book at the right moment is a gift. Here are the best Christian books for specific life seasons — grief, doubt, marriage, suffering, dryness, and new faith — chosen for their proven power…",
    images: ["/api/og?title=Books+for+Every+Season+of+Life"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books for Every Season of Life — Vine",
    description: "The right book at the right moment is a gift. Here are the best Christian books for specific life seasons — grief, doubt, marriage, suffering, dryness, and new faith — chosen for their proven power…",
    images: ["/api/og?title=Books+for+Every+Season+of+Life"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
