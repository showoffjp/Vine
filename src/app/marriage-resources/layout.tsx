import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Marriage Resources",
  description: "The best books, premarriage resources, biblical principles, and counseling options for Christian couples — for every season from engagement to decades of marriage.",
  openGraph: {
    title: "Christian Marriage Resources — Vine",
    description: "The best books, premarriage resources, biblical principles, and counseling options for Christian couples — for every season from engagement to decades of marriage.",
    images: ["/api/og?title=Christian+Marriage+Resources"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Marriage Resources — Vine",
    description: "The best books, premarriage resources, biblical principles, and counseling options for Christian couples — for every season from engagement to decades of marriage.",
    images: ["/api/og?title=Christian+Marriage+Resources"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
