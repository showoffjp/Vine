import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocation & Calling",
  description: "You are not just employed — you are called. Every faithful act of work is an act of worship offered to the God who himself creates, orders, and sustains.",
  openGraph: {
    title: "Vocation & Calling — Vine",
    description: "You are not just employed — you are called. Every faithful act of work is an act of worship offered to the God who himself creates, orders, and sustains.",
    images: ["/api/og?title=Vocation+%26+Calling"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocation & Calling — Vine",
    description: "You are not just employed — you are called. Every faithful act of work is an act of worship offered to the God who himself creates, orders, and sustains.",
    images: ["/api/og?title=Vocation+%26+Calling"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
