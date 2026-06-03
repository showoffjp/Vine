import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grace",
  description: "Unmerited divine favor — not simply forgiveness of debts, but the positive bestowal of life, righteousness, and power upon those who have no claim on any of it.",
  openGraph: {
    title: "Grace — Vine",
    description: "Unmerited divine favor — not simply forgiveness of debts, but the positive bestowal of life, righteousness, and power upon those who have no claim on any of it.",
    images: ["/api/og?title=Grace"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace — Vine",
    description: "Unmerited divine favor — not simply forgiveness of debts, but the positive bestowal of life, righteousness, and power upon those who have no claim on any of it.",
    images: ["/api/og?title=Grace"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
