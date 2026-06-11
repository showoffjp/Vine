import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honesty & Integrity — Vine",
  description: "Integrity means being the same person in every room. A biblical guide to honesty — the ninth commandment, white lies, integrity in business and marriage, confession, Psalm 15, and truth-telling in love.",
  openGraph: {
    title: "Honesty & Integrity — Vine",
    description: "Integrity means being the same person in every room. A biblical guide to honesty — the ninth commandment, white lies, integrity in business and marriage, confession, Psalm 15, and truth-telling in love.",
    images: ["/api/og?title=Honesty+%26+Integrity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honesty & Integrity — Vine",
    description: "Integrity means being the same person in every room. A biblical guide to honesty — the ninth commandment, white lies, integrity in business and marriage, confession, Psalm 15, and truth-telling in love.",
    images: ["/api/og?title=Honesty+%26+Integrity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
