import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanctification",
  description: "The process by which believers are made holy — its theological foundations, historical interpretations, practical means, and the honest reality of the ongoing struggle.",
  openGraph: {
    title: "Sanctification — Vine",
    description: "The process by which believers are made holy — its theological foundations, historical interpretations, practical means, and the honest reality of the ongoing struggle.",
    images: ["/api/og?title=Sanctification"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctification — Vine",
    description: "The process by which believers are made holy — its theological foundations, historical interpretations, practical means, and the honest reality of the ongoing struggle.",
    images: ["/api/og?title=Sanctification"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
