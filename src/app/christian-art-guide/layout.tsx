import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Art & Architecture",
  description: "Two thousand years of beauty made in response to the Incarnation — a theological guide to the greatest masterworks, sacred architecture, and living artists in the Christian tradition.",
  openGraph: {
    title: "Christian Art & Architecture — Vine",
    description: "Two thousand years of beauty made in response to the Incarnation — a theological guide to the greatest masterworks, sacred architecture, and living artists in the Christian tradition.",
    images: ["/api/og?title=Christian+Art+%26+Architecture"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Art & Architecture — Vine",
    description: "Two thousand years of beauty made in response to the Incarnation — a theological guide to the greatest masterworks, sacred architecture, and living artists in the Christian tradition.",
    images: ["/api/og?title=Christian+Art+%26+Architecture"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
