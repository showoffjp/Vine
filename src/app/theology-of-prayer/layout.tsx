import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Theology of Prayer",
  description: "Why pray if God already knows? What are we actually doing when we pray? Explore the theology, the teaching of Jesus, the forms, and the honest obstacles.",
  openGraph: {
    title: "The Theology of Prayer — Vine",
    description: "Why pray if God already knows? What are we actually doing when we pray? Explore the theology, the teaching of Jesus, the forms, and the honest obstacles.",
    images: ["/api/og?title=The+Theology+of+Prayer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Theology of Prayer — Vine",
    description: "Why pray if God already knows? What are we actually doing when we pray? Explore the theology, the teaching of Jesus, the forms, and the honest obstacles.",
    images: ["/api/og?title=The+Theology+of+Prayer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
