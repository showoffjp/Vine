import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith content for your commute.",
  description: "8 shows. 1,600+ episodes. Theology, devotionals, apologetics, parenting, finance, and more — from voices you can trust.",
  openGraph: {
    title: "Faith content for your commute. — Vine",
    description: "8 shows. 1,600+ episodes. Theology, devotionals, apologetics, parenting, finance, and more — from voices you can trust.",
    images: ["/api/og?title=Faith+content+for+your+commute."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith content for your commute. — Vine",
    description: "8 shows. 1,600+ episodes. Theology, devotionals, apologetics, parenting, finance, and more — from voices you can trust.",
    images: ["/api/og?title=Faith+content+for+your+commute."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
