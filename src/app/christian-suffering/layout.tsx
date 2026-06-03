import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suffering and the Cross",
  description: "Suffering is the most universal human experience and the most searched theological question. The Christian answer is not a philosophical argument — it is a person: the God who suffered, died, and r…",
  openGraph: {
    title: "Suffering and the Cross — Vine",
    description: "Suffering is the most universal human experience and the most searched theological question. The Christian answer is not a philosophical argument — it is a person: the God who suffered, died, and r…",
    images: ["/api/og?title=Suffering+and+the+Cross"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suffering and the Cross — Vine",
    description: "Suffering is the most universal human experience and the most searched theological question. The Christian answer is not a philosophical argument — it is a person: the God who suffered, died, and r…",
    images: ["/api/og?title=Suffering+and+the+Cross"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
