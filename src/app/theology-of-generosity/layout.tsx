import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Generosity",
  description: "Why we give, how we give, and what giving does to us — grounded in Scripture, illustrated by lives.",
  openGraph: {
    title: "A Theology of Generosity — Vine",
    description: "Why we give, how we give, and what giving does to us — grounded in Scripture, illustrated by lives.",
    images: ["/api/og?title=A+Theology+of+Generosity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Theology of Generosity — Vine",
    description: "Why we give, how we give, and what giving does to us — grounded in Scripture, illustrated by lives.",
    images: ["/api/og?title=A+Theology+of+Generosity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
