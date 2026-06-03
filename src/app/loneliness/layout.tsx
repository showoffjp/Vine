import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loneliness & Community",
  description: "God declared aloneness 'not good' before sin ever entered the picture. Loneliness is not a failure — it is a signal. And the gospel is the beginning of the answer.",
  openGraph: {
    title: "Loneliness & Community — Vine",
    description: "God declared aloneness 'not good' before sin ever entered the picture. Loneliness is not a failure — it is a signal. And the gospel is the beginning of the answer.",
    images: ["/api/og?title=Loneliness+%26+Community"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loneliness & Community — Vine",
    description: "God declared aloneness 'not good' before sin ever entered the picture. Loneliness is not a failure — it is a signal. And the gospel is the beginning of the answer.",
    images: ["/api/og?title=Loneliness+%26+Community"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
