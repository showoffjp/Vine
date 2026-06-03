import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heaven and Eternal Life",
  description: "The Christian hope is not escape from earth into a spiritual realm but the resurrection of the body and the renewal of all things — a physical, relational, embodied existence with God that makes pr…",
  openGraph: {
    title: "Heaven and Eternal Life — Vine",
    description: "The Christian hope is not escape from earth into a spiritual realm but the resurrection of the body and the renewal of all things — a physical, relational, embodied existence with God that makes pr…",
    images: ["/api/og?title=Heaven+and+Eternal+Life"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaven and Eternal Life — Vine",
    description: "The Christian hope is not escape from earth into a spiritual realm but the resurrection of the body and the renewal of all things — a physical, relational, embodied existence with God that makes pr…",
    images: ["/api/og?title=Heaven+and+Eternal+Life"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
