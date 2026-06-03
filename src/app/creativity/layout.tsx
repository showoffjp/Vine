import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Creativity",
  description: "You were made in the image of a Creator. Every act of making — words, music, images, craft — is a participation in God's creative work.",
  openGraph: {
    title: "Christian Creativity — Vine",
    description: "You were made in the image of a Creator. Every act of making — words, music, images, craft — is a participation in God's creative work.",
    images: ["/api/og?title=Christian+Creativity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Creativity — Vine",
    description: "You were made in the image of a Creator. Every act of making — words, music, images, craft — is a participation in God's creative work.",
    images: ["/api/og?title=Christian+Creativity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
