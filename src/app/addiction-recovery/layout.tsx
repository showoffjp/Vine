import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addiction & Recovery",
  description: "'He has sent me to proclaim freedom for the prisoners.' Addiction is captivity — and the gospel is the announcement that captivity is not the final word. Recovery is possible, but rarely alone.",
  openGraph: {
    title: "Addiction & Recovery — Vine",
    description: "'He has sent me to proclaim freedom for the prisoners.' Addiction is captivity — and the gospel is the announcement that captivity is not the final word. Recovery is possible, but rarely alone.",
    images: ["/api/og?title=Addiction+%26+Recovery"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Addiction & Recovery — Vine",
    description: "'He has sent me to proclaim freedom for the prisoners.' Addiction is captivity — and the gospel is the announcement that captivity is not the final word. Recovery is possible, but rarely alone.",
    images: ["/api/og?title=Addiction+%26+Recovery"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
