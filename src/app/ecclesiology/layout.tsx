import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of the Church",
  description: "Ecclesiology — the theology of the church — asks: what is the church, why does it exist, and what does it mean to belong to it? The answers are richer and more demanding than most Christians realize.",
  openGraph: {
    title: "Theology of the Church — Vine",
    description: "Ecclesiology — the theology of the church — asks: what is the church, why does it exist, and what does it mean to belong to it? The answers are richer and more demanding than most Christians realize.",
    images: ["/api/og?title=Theology+of+the+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of the Church — Vine",
    description: "Ecclesiology — the theology of the church — asks: what is the church, why does it exist, and what does it mean to belong to it? The answers are richer and more demanding than most Christians realize.",
    images: ["/api/og?title=Theology+of+the+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
