import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lord’s Supper",
  description: "Communion, Eucharist, the Breaking of Bread",
  openGraph: {
    title: "The Lord’s Supper — Vine",
    description: "Communion, Eucharist, the Breaking of Bread",
    images: ["/api/og?title=The+Lord%E2%80%99s+Supper"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lord’s Supper — Vine",
    description: "Communion, Eucharist, the Breaking of Bread",
    images: ["/api/og?title=The+Lord%E2%80%99s+Supper"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
