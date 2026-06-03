import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New Creation",
  description: "God's redemptive purpose is not to rescue souls out of the world, but to redeem the world itself — a new heavens and new earth where righteousness dwells, where the groaning of creation gives way t…",
  openGraph: {
    title: "The New Creation — Vine",
    description: "God's redemptive purpose is not to rescue souls out of the world, but to redeem the world itself — a new heavens and new earth where righteousness dwells, where the groaning of creation gives way t…",
    images: ["/api/og?title=The+New+Creation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The New Creation — Vine",
    description: "God's redemptive purpose is not to rescue souls out of the world, but to redeem the world itself — a new heavens and new earth where righteousness dwells, where the groaning of creation gives way t…",
    images: ["/api/og?title=The+New+Creation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
