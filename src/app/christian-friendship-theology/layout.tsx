import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Friendship Theology",
  description: "Perichoresis, hesed, philia, and agape — the theological foundations of deep Christian friendship, from the inner life of the Trinity to the practices that form it.",
  openGraph: {
    title: "Christian Friendship Theology — Vine",
    description: "Perichoresis, hesed, philia, and agape — the theological foundations of deep Christian friendship, from the inner life of the Trinity to the practices that form it.",
    images: ["/api/og?title=Christian+Friendship+Theology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Friendship Theology — Vine",
    description: "Perichoresis, hesed, philia, and agape — the theological foundations of deep Christian friendship, from the inner life of the Trinity to the practices that form it.",
    images: ["/api/og?title=Christian+Friendship+Theology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
