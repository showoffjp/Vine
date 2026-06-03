import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Worship",
  description: "Worship is not a section of the Christian life — it is the whole of it. Explore the theology, elements, debates, and formative power of gathered and scattered worship.",
  openGraph: {
    title: "Theology of Worship — Vine",
    description: "Worship is not a section of the Christian life — it is the whole of it. Explore the theology, elements, debates, and formative power of gathered and scattered worship.",
    images: ["/api/og?title=Theology+of+Worship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Worship — Vine",
    description: "Worship is not a section of the Christian life — it is the whole of it. Explore the theology, elements, debates, and formative power of gathered and scattered worship.",
    images: ["/api/og?title=Theology+of+Worship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
