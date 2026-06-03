import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Postures",
  description: "The body is not separate from the soul. How you position yourself in prayer shapes what you experience in prayer. Scripture describes at least six distinct physical postures of prayer — each embody…",
  openGraph: {
    title: "Prayer Postures — Vine",
    description: "The body is not separate from the soul. How you position yourself in prayer shapes what you experience in prayer. Scripture describes at least six distinct physical postures of prayer — each embody…",
    images: ["/api/og?title=Prayer+Postures"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Postures — Vine",
    description: "The body is not separate from the soul. How you position yourself in prayer shapes what you experience in prayer. Scripture describes at least six distinct physical postures of prayer — each embody…",
    images: ["/api/og?title=Prayer+Postures"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
