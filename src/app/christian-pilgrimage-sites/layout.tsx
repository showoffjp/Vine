import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Pilgrimage & Holy Sites",
  description: "The places where Christian history happened — from the hills of Galilee to the Reformation church at Wittenberg. Visiting these sites is among the most spiritually formative experiences available t…",
  openGraph: {
    title: "Christian Pilgrimage & Holy Sites — Vine",
    description: "The places where Christian history happened — from the hills of Galilee to the Reformation church at Wittenberg. Visiting these sites is among the most spiritually formative experiences available t…",
    images: ["/api/og?title=Christian+Pilgrimage+%26+Holy+Sites"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Pilgrimage & Holy Sites — Vine",
    description: "The places where Christian history happened — from the hills of Galilee to the Reformation church at Wittenberg. Visiting these sites is among the most spiritually formative experiences available t…",
    images: ["/api/og?title=Christian+Pilgrimage+%26+Holy+Sites"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
