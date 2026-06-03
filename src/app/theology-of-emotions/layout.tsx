import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Emotions",
  description: "Emotions are not obstacles to faith — they are part of being made in God's image. But they are also fallen, and they must be trained by truth. A Christian theology of emotions holds both.",
  openGraph: {
    title: "A Theology of Emotions — Vine",
    description: "Emotions are not obstacles to faith — they are part of being made in God's image. But they are also fallen, and they must be trained by truth. A Christian theology of emotions holds both.",
    images: ["/api/og?title=A+Theology+of+Emotions"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Theology of Emotions — Vine",
    description: "Emotions are not obstacles to faith — they are part of being made in God's image. But they are also fallen, and they must be trained by truth. A Christian theology of emotions holds both.",
    images: ["/api/og?title=A+Theology+of+Emotions"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
