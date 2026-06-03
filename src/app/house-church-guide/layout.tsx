import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The House Church: A Guide",
  description: "The church met in homes for its first 300 years. House churches are not a novelty or a reaction — they are a recovery of the New Testament's baseline pattern of Christian community.",
  openGraph: {
    title: "The House Church: A Guide — Vine",
    description: "The church met in homes for its first 300 years. House churches are not a novelty or a reaction — they are a recovery of the New Testament's baseline pattern of Christian community.",
    images: ["/api/og?title=The+House+Church%3A+A+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The House Church: A Guide — Vine",
    description: "The church met in homes for its first 300 years. House churches are not a novelty or a reaction — they are a recovery of the New Testament's baseline pattern of Christian community.",
    images: ["/api/og?title=The+House+Church%3A+A+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
