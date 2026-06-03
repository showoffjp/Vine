import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eastern Orthodox Christianity",
  description: "The ancient Eastern church — preserving 2,000 years of liturgy, theology, and spirituality. The second-largest Christian communion in the world, with 220 million adherents from Greece to Russia to…",
  openGraph: {
    title: "Eastern Orthodox Christianity — Vine",
    description: "The ancient Eastern church — preserving 2,000 years of liturgy, theology, and spirituality. The second-largest Christian communion in the world, with 220 million adherents from Greece to Russia to…",
    images: ["/api/og?title=Eastern+Orthodox+Christianity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eastern Orthodox Christianity — Vine",
    description: "The ancient Eastern church — preserving 2,000 years of liturgy, theology, and spirituality. The second-largest Christian communion in the world, with 220 million adherents from Greece to Russia to…",
    images: ["/api/og?title=Eastern+Orthodox+Christianity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
