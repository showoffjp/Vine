import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Single Life",
  description: "Singleness is not the waiting room before the real life begins. It is a calling, a season, and a gift — with specific freedoms, specific challenges, and specific formation ahead.",
  openGraph: {
    title: "The Single Life — Vine",
    description: "Singleness is not the waiting room before the real life begins. It is a calling, a season, and a gift — with specific freedoms, specific challenges, and specific formation ahead.",
    images: ["/api/og?title=The+Single+Life"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Single Life — Vine",
    description: "Singleness is not the waiting room before the real life begins. It is a calling, a season, and a gift — with specific freedoms, specific challenges, and specific formation ahead.",
    images: ["/api/og?title=The+Single+Life"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
