import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Beauty — Vine",
  description: "God is not only true and good — he is beautiful. A theology of aesthetics, art, and creativity rooted in the character of the Creator and the calling of his image-bearers.",
  openGraph: {
    title: "Theology of Beauty — Vine",
    description: "God is not only true and good — he is beautiful. A theology of aesthetics, art, and creativity rooted in the character of the Creator and the calling of his image-bearers.",
    images: ["/api/og?title=Theology+of+Beauty"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Beauty — Vine",
    description: "God is not only true and good — he is beautiful. A theology of aesthetics, art, and creativity rooted in the character of the Creator and the calling of his image-bearers.",
    images: ["/api/og?title=Theology+of+Beauty"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
