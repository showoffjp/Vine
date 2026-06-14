import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 15 Guide — The True Vine — Christian Study",
  description: "A deep guide to John 15 — Jesus as the true vine and the Father as the vinedresser, the call to abide in him and bear much fruit, the truth that apart from him we can do nothing, the command to love one another, and the dignity of being chosen and appointed by Christ.",
  openGraph: { title: "John 15 Guide — The True Vine — Vine", description: "A guide to John 15 — the true vine, abiding in Christ, bearing fruit, loving one another, and being chosen and appointed.", images: ["/api/og?title=John+15+Guide"] },
  twitter: { card: "summary_large_image", title: "John 15 Guide — The True Vine — Vine", description: "A deep guide to John 15, the true vine and abiding in Christ.", images: ["/api/og?title=John+15+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
