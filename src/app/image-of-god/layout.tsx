import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Image of God",
  description: "Imago Dei -- the declaration that every human being is made in the image and likeness of God -- is the theological foundation of human dignity, the ground of ethics, and the lens through which Scri…",
  openGraph: {
    title: "The Image of God — Vine",
    description: "Imago Dei -- the declaration that every human being is made in the image and likeness of God -- is the theological foundation of human dignity, the ground of ethics, and the lens through which Scri…",
    images: ["/api/og?title=The+Image+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Image of God — Vine",
    description: "Imago Dei -- the declaration that every human being is made in the image and likeness of God -- is the theological foundation of human dignity, the ground of ethics, and the lens through which Scri…",
    images: ["/api/og?title=The+Image+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
