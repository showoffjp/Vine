import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suffering",
  description: "Suffering is the most universal human experience and the most urgent theological question. The Christian answer is not a philosophy — it is a crucified and risen God.",
  openGraph: {
    title: "Suffering — Vine",
    description: "Suffering is the most universal human experience and the most urgent theological question. The Christian answer is not a philosophy — it is a crucified and risen God.",
    images: ["/api/og?title=Suffering"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suffering — Vine",
    description: "Suffering is the most universal human experience and the most urgent theological question. The Christian answer is not a philosophy — it is a crucified and risen God.",
    images: ["/api/og?title=Suffering"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
