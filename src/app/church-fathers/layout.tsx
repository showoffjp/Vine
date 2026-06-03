import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Church Fathers",
  description: "The theologians of the first five centuries who defined orthodox Christianity, defended it against heresy, and bequeathed us a rich theological tradition. Knowing them helps you understand both whe…",
  openGraph: {
    title: "The Church Fathers — Vine",
    description: "The theologians of the first five centuries who defined orthodox Christianity, defended it against heresy, and bequeathed us a rich theological tradition. Knowing them helps you understand both whe…",
    images: ["/api/og?title=The+Church+Fathers"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Church Fathers — Vine",
    description: "The theologians of the first five centuries who defined orthodox Christianity, defended it against heresy, and bequeathed us a rich theological tradition. Knowing them helps you understand both whe…",
    images: ["/api/og?title=The+Church+Fathers"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
