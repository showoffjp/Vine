import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Hope — Vine",
  description: "Christian hope is not optimism but an anchor for the soul. A theological and practical guide to the living hope of 1 Peter 1:3 — hope in suffering, waiting with hope, and the promise of the world's renewal.",
  openGraph: {
    title: "Living Hope — Vine",
    description: "Christian hope is not optimism but an anchor for the soul. A theological and practical guide to the living hope of 1 Peter 1:3 — hope in suffering, waiting with hope, and the promise of the world's renewal.",
    images: ["/api/og?title=Living+Hope"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Hope — Vine",
    description: "Christian hope is not optimism but an anchor for the soul. A theological and practical guide to the living hope of 1 Peter 1:3 — hope in suffering, waiting with hope, and the promise of the world's renewal.",
    images: ["/api/og?title=Living+Hope"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
