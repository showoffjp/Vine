import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Fasting: What It Is, Why It Matters, How to Fast | Vine",
  description: "A biblical and practical guide to Christian fasting — the theology behind it, how Jesus and the early church practiced it, key voices on the discipline, and how to begin fasting faithfully.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
