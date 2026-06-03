import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Fatherhood of God",
  description: "Jesus taught us to begin prayer with two words that changed the history of religion: Our Father. What does it mean that the Creator of the universe is our Father, and how do we receive that truth w…",
  openGraph: {
    title: "The Fatherhood of God — Vine",
    description: "Jesus taught us to begin prayer with two words that changed the history of religion: Our Father. What does it mean that the Creator of the universe is our Father, and how do we receive that truth w…",
    images: ["/api/og?title=The+Fatherhood+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fatherhood of God — Vine",
    description: "Jesus taught us to begin prayer with two words that changed the history of religion: Our Father. What does it mean that the Creator of the universe is our Father, and how do we receive that truth w…",
    images: ["/api/og?title=The+Fatherhood+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
