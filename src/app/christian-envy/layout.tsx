import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Envy & the Christian — Vine",
  description: "Envy as root sin, the gospel remedy of identity in Christ, and the practice of rejoicing with those who rejoice. A theological and practical guide to overcoming envy.",
  openGraph: {
    title: "Envy & the Christian — Vine",
    description: "Envy as root sin, the gospel remedy of identity in Christ, and the practice of rejoicing with those who rejoice. A theological and practical guide to overcoming envy.",
    images: ["/api/og?title=Envy+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envy & the Christian — Vine",
    description: "Envy as root sin, the gospel remedy of identity in Christ, and the practice of rejoicing with those who rejoice. A theological and practical guide to overcoming envy.",
    images: ["/api/og?title=Envy+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
