import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Providence of God",
  description: "God not only created the world — he governs it. Providence is the doctrine that God actively sustains, directs, and orders all things toward his purposes, from empires to sparrows.",
  openGraph: {
    title: "The Providence of God — Vine",
    description: "God not only created the world — he governs it. Providence is the doctrine that God actively sustains, directs, and orders all things toward his purposes, from empires to sparrows.",
    images: ["/api/og?title=The+Providence+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Providence of God — Vine",
    description: "God not only created the world — he governs it. Providence is the doctrine that God actively sustains, directs, and orders all things toward his purposes, from empires to sparrows.",
    images: ["/api/og?title=The+Providence+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
