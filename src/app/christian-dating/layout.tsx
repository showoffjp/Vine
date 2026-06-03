import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Dating",
  description: "Dating exists to evaluate suitability for marriage — which changes everything: how long you date, what you talk about, how physically intimate you become, and when you end a relationship.",
  openGraph: {
    title: "Christian Dating — Vine",
    description: "Dating exists to evaluate suitability for marriage — which changes everything: how long you date, what you talk about, how physically intimate you become, and when you end a relationship.",
    images: ["/api/og?title=Christian+Dating"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Dating — Vine",
    description: "Dating exists to evaluate suitability for marriage — which changes everything: how long you date, what you talk about, how physically intimate you become, and when you end a relationship.",
    images: ["/api/og?title=Christian+Dating"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
