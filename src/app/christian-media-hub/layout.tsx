import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Media Hub",
  description: "The best real Christian content on the internet — top YouTube channels, trusted websites, and proven daily life hacks for following Jesus.",
  openGraph: {
    title: "Christian Media Hub — Vine",
    description: "The best real Christian content on the internet — top YouTube channels, trusted websites, and proven daily life hacks for following Jesus.",
    images: ["/api/og?title=Christian+Media+Hub"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Media Hub — Vine",
    description: "The best real Christian content on the internet — top YouTube channels, trusted websites, and proven daily life hacks for following Jesus.",
    images: ["/api/og?title=Christian+Media+Hub"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
