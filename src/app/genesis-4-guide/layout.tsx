import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 4 Chapter Guide – Cain and Abel, Sin at the Door | The Vine",
  description: "A deep guide to Genesis 4 — the first siblings Cain and Abel, their offerings and God's response, the first murder and the blood crying from the ground, the mark of God's protection on Cain, and the beginning of human civilization through Seth's line ending with people calling on the name of the Lord.",
  openGraph: { title: "Genesis 4 Chapter Guide – Cain and Abel | The Vine", description: "A guide to Genesis 4 — Cain and Abel, sin crouching at the door, the first murder, the mark of Cain, and the dawn of worship in Enosh's day.", images: ["/api/og?title=Genesis+4+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 4 Chapter Guide – Cain and Abel | The Vine", description: "A deep guide to Genesis 4 — Cain and Abel, sin crouching at the door, the first murder, the mark of Cain, and the dawn of worship.", images: ["/api/og?title=Genesis+4+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
