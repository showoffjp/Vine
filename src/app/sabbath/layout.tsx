import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sabbath",
  description: "One day in seven belongs to rest, worship, and delight — woven into creation before there was law, commandment, or even sin. The Sabbath is God's weekly gift to his creatures: come, stop, rest, and…",
  openGraph: {
    title: "The Sabbath — Vine",
    description: "One day in seven belongs to rest, worship, and delight — woven into creation before there was law, commandment, or even sin. The Sabbath is God's weekly gift to his creatures: come, stop, rest, and…",
    images: ["/api/og?title=The+Sabbath"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sabbath — Vine",
    description: "One day in seven belongs to rest, worship, and delight — woven into creation before there was law, commandment, or even sin. The Sabbath is God's weekly gift to his creatures: come, stop, rest, and…",
    images: ["/api/og?title=The+Sabbath"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
