import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creation Care",
  description: "The earth belongs to God. We are its stewards, not its owners. Caring for creation is not a political position — it is a response to who God is and what he has entrusted to us.",
  openGraph: {
    title: "Creation Care — Vine",
    description: "The earth belongs to God. We are its stewards, not its owners. Caring for creation is not a political position — it is a response to who God is and what he has entrusted to us.",
    images: ["/api/og?title=Creation+Care"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creation Care — Vine",
    description: "The earth belongs to God. We are its stewards, not its owners. Caring for creation is not a political position — it is a response to who God is and what he has entrusted to us.",
    images: ["/api/og?title=Creation+Care"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
