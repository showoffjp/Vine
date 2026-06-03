import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building a Prayer Life",
  description: "Prayer is not a technique to be mastered or a performance to be perfected — it is a relationship to be sustained. The deepest prayer lives are built not on heroics but on showing up, day after day,…",
  openGraph: {
    title: "Building a Prayer Life — Vine",
    description: "Prayer is not a technique to be mastered or a performance to be perfected — it is a relationship to be sustained. The deepest prayer lives are built not on heroics but on showing up, day after day,…",
    images: ["/api/og?title=Building+a+Prayer+Life"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Prayer Life — Vine",
    description: "Prayer is not a technique to be mastered or a performance to be perfected — it is a relationship to be sustained. The deepest prayer lives are built not on heroics but on showing up, day after day,…",
    images: ["/api/og?title=Building+a+Prayer+Life"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
