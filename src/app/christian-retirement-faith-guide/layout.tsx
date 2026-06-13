import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Retirement Faith Guide",
  description: "Faith in the retirement years — the theology of aging and elderhood, what to do with freedom after a lifetime of work, legacy and the next generation, the losses of aging (health, peers, independence), preparing well for death, and what it means to finish well.",
  openGraph: { title: "Christian Retirement Faith Guide — Vine", description: "Faith in retirement — theology of aging, legacy, the losses of aging, and finishing well.", images: ["/api/og?title=Christian+Retirement+Faith+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Retirement Faith Guide — Vine", description: "Faith in the retirement years — aging, legacy, and finishing well.", images: ["/api/og?title=Christian+Retirement+Faith+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
