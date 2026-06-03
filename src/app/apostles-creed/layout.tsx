import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Apostles’ Creed",
  description: "For nearly two thousand years, Christians around the world have confessed their faith in the words of the Apostles’ Creed. In a few short lines it gathers the essential story of the gospel — Father…",
  openGraph: {
    title: "The Apostles’ Creed — Vine",
    description: "For nearly two thousand years, Christians around the world have confessed their faith in the words of the Apostles’ Creed. In a few short lines it gathers the essential story of the gospel — Father…",
    images: ["/api/og?title=The+Apostles%E2%80%99+Creed"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Apostles’ Creed — Vine",
    description: "For nearly two thousand years, Christians around the world have confessed their faith in the words of the Apostles’ Creed. In a few short lines it gathers the essential story of the gospel — Father…",
    images: ["/api/og?title=The+Apostles%E2%80%99+Creed"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
