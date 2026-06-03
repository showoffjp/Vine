import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharing the Gospel",
  description: "The good news of Jesus Christ is the most important message in the world — and you can learn to share it clearly and graciously. Here are six proven gospel presentations, practical tips for everyda…",
  openGraph: {
    title: "Sharing the Gospel — Vine",
    description: "The good news of Jesus Christ is the most important message in the world — and you can learn to share it clearly and graciously. Here are six proven gospel presentations, practical tips for everyda…",
    images: ["/api/og?title=Sharing+the+Gospel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharing the Gospel — Vine",
    description: "The good news of Jesus Christ is the most important message in the world — and you can learn to share it clearly and graciously. Here are six proven gospel presentations, practical tips for everyda…",
    images: ["/api/og?title=Sharing+the+Gospel"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
