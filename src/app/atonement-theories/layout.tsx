import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of the Cross",
  description: "Why did Jesus have to die? Six major theories of the atonement, the Bible's own images for the cross, answers to common objections, and devotional reflections on the central event of human history.",
  openGraph: {
    title: "Theology of the Cross — Vine",
    description: "Why did Jesus have to die? Six major theories of the atonement, the Bible's own images for the cross, answers to common objections, and devotional reflections on the central event of human history.",
    images: ["/api/og?title=Theology+of+the+Cross"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of the Cross — Vine",
    description: "Why did Jesus have to die? Six major theories of the atonement, the Bible's own images for the cross, answers to common objections, and devotional reflections on the central event of human history.",
    images: ["/api/og?title=Theology+of+the+Cross"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
