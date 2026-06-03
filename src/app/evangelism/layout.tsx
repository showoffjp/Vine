import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharing Your Faith Naturally",
  description: "Every believer is called to share good news — not by arguing people into the Kingdom, but by loving them there. Practical methods, real conversations, and stories from around the world.",
  openGraph: {
    title: "Sharing Your Faith Naturally — Vine",
    description: "Every believer is called to share good news — not by arguing people into the Kingdom, but by loving them there. Practical methods, real conversations, and stories from around the world.",
    images: ["/api/og?title=Sharing+Your+Faith+Naturally"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharing Your Faith Naturally — Vine",
    description: "Every believer is called to share good news — not by arguing people into the Kingdom, but by loving them there. Practical methods, real conversations, and stories from around the world.",
    images: ["/api/og?title=Sharing+Your+Faith+Naturally"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
