import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Essential Christian Podcasts",
  description: "From Renewing Your Mind to Lectio 365 — the podcasts that provide the deepest, most consistent spiritual and theological nourishment available on-demand. Curated for substance, not popularity.",
  openGraph: {
    title: "The Essential Christian Podcasts — Vine",
    description: "From Renewing Your Mind to Lectio 365 — the podcasts that provide the deepest, most consistent spiritual and theological nourishment available on-demand. Curated for substance, not popularity.",
    images: ["/api/og?title=The+Essential+Christian+Podcasts"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Essential Christian Podcasts — Vine",
    description: "From Renewing Your Mind to Lectio 365 — the podcasts that provide the deepest, most consistent spiritual and theological nourishment available on-demand. Curated for substance, not popularity.",
    images: ["/api/og?title=The+Essential+Christian+Podcasts"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
