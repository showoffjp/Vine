import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Church Fathers",
  description: "The theologians who shaped Christian doctrine in the first six centuries — from Ignatius’s martyrdom letters to Augustine’s City of God. The cloud of witnesses who worked out what we now confess.",
  openGraph: {
    title: "The Church Fathers — Vine",
    description: "The theologians who shaped Christian doctrine in the first six centuries — from Ignatius’s martyrdom letters to Augustine’s City of God. The cloud of witnesses who worked out what we now confess.",
    images: ["/api/og?title=The+Church+Fathers"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Church Fathers — Vine",
    description: "The theologians who shaped Christian doctrine in the first six centuries — from Ignatius’s martyrdom letters to Augustine’s City of God. The cloud of witnesses who worked out what we now confess.",
    images: ["/api/og?title=The+Church+Fathers"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
