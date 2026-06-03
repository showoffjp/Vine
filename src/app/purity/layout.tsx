import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexuality & Purity",
  description: "The Christian sexual ethic begins not with rules but with a vision: the body is a temple, sex is a gift, and purity is not body-hatred but the conviction that the body is worth protecting because i…",
  openGraph: {
    title: "Sexuality & Purity — Vine",
    description: "The Christian sexual ethic begins not with rules but with a vision: the body is a temple, sex is a gift, and purity is not body-hatred but the conviction that the body is worth protecting because i…",
    images: ["/api/og?title=Sexuality+%26+Purity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sexuality & Purity — Vine",
    description: "The Christian sexual ethic begins not with rules but with a vision: the body is a temple, sex is a gift, and purity is not body-hatred but the conviction that the body is worth protecting because i…",
    images: ["/api/og?title=Sexuality+%26+Purity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
