import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Humility Guide — Tapeinophrosyne and the Kenotic Mind",
  description: "A deep guide to Christian humility — the tapeinophrosyne of Philippians 2, Jesus washing feet, C.S. Lewis on pride as the great sin, and why the humble shall be exalted.",
  openGraph: {
    title: "Christian Humility Guide — Vine",
    description: "A deep guide to Christian humility — the tapeinophrosyne of Philippians 2, Jesus washing feet, C.S. Lewis on pride as the great sin, and why the humble shall be exalted.",
    images: ["/api/og?title=Christian+Humility+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Humility Guide — Vine",
    description: "A deep guide to Christian humility — the tapeinophrosyne of Philippians 2, Jesus washing feet, C.S. Lewis on pride as the great sin, and why the humble shall be exalted.",
    images: ["/api/og?title=Christian+Humility+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
