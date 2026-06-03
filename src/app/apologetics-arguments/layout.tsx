import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arguments for God's Existence",
  description: "The classic arguments for God's existence are not proofs in the mathematical sense — they are evidence, cumulatively strong, that theism is the most rational explanation for what we find in the uni…",
  openGraph: {
    title: "Arguments for God's Existence — Vine",
    description: "The classic arguments for God's existence are not proofs in the mathematical sense — they are evidence, cumulatively strong, that theism is the most rational explanation for what we find in the uni…",
    images: ["/api/og?title=Arguments+for+God's+Existence"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arguments for God's Existence — Vine",
    description: "The classic arguments for God's existence are not proofs in the mathematical sense — they are evidence, cumulatively strong, that theism is the most rational explanation for what we find in the uni…",
    images: ["/api/og?title=Arguments+for+God's+Existence"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
