import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Prophets",
  description: "The prophets did not primarily predict the future — they declared the word of God into their present. But in doing so, they pointed toward the One in whom all their words find their fullest meaning.",
  openGraph: {
    title: "The Prophets — Vine",
    description: "The prophets did not primarily predict the future — they declared the word of God into their present. But in doing so, they pointed toward the One in whom all their words find their fullest meaning.",
    images: ["/api/og?title=The+Prophets"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Prophets — Vine",
    description: "The prophets did not primarily predict the future — they declared the word of God into their present. But in doing so, they pointed toward the One in whom all their words find their fullest meaning.",
    images: ["/api/og?title=The+Prophets"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
