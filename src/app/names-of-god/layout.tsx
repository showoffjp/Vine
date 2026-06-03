import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Names of God",
  description: "In the ancient world, a name was never a mere label — it revealed the very character of the one who bore it. As God unveiled himself to his people through the Old Testament, he disclosed his nature…",
  openGraph: {
    title: "The Names of God — Vine",
    description: "In the ancient world, a name was never a mere label — it revealed the very character of the one who bore it. As God unveiled himself to his people through the Old Testament, he disclosed his nature…",
    images: ["/api/og?title=The+Names+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Names of God — Vine",
    description: "In the ancient world, a name was never a mere label — it revealed the very character of the one who bore it. As God unveiled himself to his people through the Old Testament, he disclosed his nature…",
    images: ["/api/og?title=The+Names+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
