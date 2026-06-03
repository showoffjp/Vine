import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parenting Teenagers",
  description: "Parenting a teenager is one of the most spiritually demanding callings a person can receive. The goal is not a compliant teenager but a launched adult with owned faith, relational health, and the k…",
  openGraph: {
    title: "Parenting Teenagers — Vine",
    description: "Parenting a teenager is one of the most spiritually demanding callings a person can receive. The goal is not a compliant teenager but a launched adult with owned faith, relational health, and the k…",
    images: ["/api/og?title=Parenting+Teenagers"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parenting Teenagers — Vine",
    description: "Parenting a teenager is one of the most spiritually demanding callings a person can receive. The goal is not a compliant teenager but a launched adult with owned faith, relational health, and the k…",
    images: ["/api/og?title=Parenting+Teenagers"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
