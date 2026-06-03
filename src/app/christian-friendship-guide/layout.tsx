import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Theology of Christian Friendship",
  description: "What C.S. Lewis called one of the things that give value to survival. What Jonathan and David embodied in covenant. What the four loves reveal about the human soul — and what Christian friendship w…",
  openGraph: {
    title: "The Theology of Christian Friendship — Vine",
    description: "What C.S. Lewis called one of the things that give value to survival. What Jonathan and David embodied in covenant. What the four loves reveal about the human soul — and what Christian friendship w…",
    images: ["/api/og?title=The+Theology+of+Christian+Friendship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Theology of Christian Friendship — Vine",
    description: "What C.S. Lewis called one of the things that give value to survival. What Jonathan and David embodied in covenant. What the four loves reveal about the human soul — and what Christian friendship w…",
    images: ["/api/og?title=The+Theology+of+Christian+Friendship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
