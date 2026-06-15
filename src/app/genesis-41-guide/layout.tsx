import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 41 Guide — Pharaoh Dreams and Joseph Exalted",
  description: "A deep guide to Genesis 41 — Pharaoh's dreams of seven fat and seven thin cows, Joseph's interpretation foretelling seven years of abundance and seven of famine, his appointment as second-in-command over Egypt, and the birth of Manasseh and Ephraim.",
  openGraph: { title: "Genesis 41 Guide — Vine", description: "A guide to Genesis 41 — Pharaoh's dreams, Joseph's interpretation, the seven years of abundance and famine, and Joseph exalted over Egypt.", images: ["/api/og?title=Genesis+41+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 41 Guide — Vine", description: "A deep guide to Genesis 41 — Pharaoh dreams, Joseph interprets, and God exalts.", images: ["/api/og?title=Genesis+41+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
