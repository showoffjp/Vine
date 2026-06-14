import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hebrews 11 Guide — Christian Study",
  description: "A deep guide to Hebrews 11 — the great chapter on faith, the assurance of things hoped for and the conviction of things not seen, from Abel, Enoch, and Noah, to Abraham and Sarah, to Moses and the exodus, to the cloud of witnesses who conquered kingdoms and endured suffering through faith.",
  openGraph: { title: "Hebrews 11 Guide — Vine", description: "A guide to Hebrews 11 — the Hall of Faith, the definition of faith, Abraham, Moses, and the great cloud of witnesses.", images: ["/api/og?title=Hebrews+11+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 11 Guide — Vine", description: "A deep guide to Hebrews 11.", images: ["/api/og?title=Hebrews+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
