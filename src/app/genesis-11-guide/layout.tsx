import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 11 Guide — Christian Study",
  description: "A deep guide to Genesis Chapter 11 — the Tower of Babel, the confusion of languages, the scattering of the nations, and the genealogy from Shem to Abram. How Genesis 11 sets up the call of Abram in Genesis 12 as God's answer to humanity's Babel-condition.",
  openGraph: { title: "Genesis 11 Guide — Vine", description: "A guide to Genesis 11 — the Tower of Babel, the scattering of nations, and the genealogy leading to Abram.", images: ["/api/og?title=Genesis+11+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 11 Guide — Vine", description: "A deep guide to Genesis Chapter 11.", images: ["/api/og?title=Genesis+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
