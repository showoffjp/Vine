import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Direction",
  description: "One of the oldest practices in Christian history — helping a person notice and respond to God. Explore the what, the history, how to find a director, and what a session actually involves.",
  openGraph: {
    title: "Spiritual Direction — Vine",
    description: "One of the oldest practices in Christian history — helping a person notice and respond to God. Explore the what, the history, how to find a director, and what a session actually involves.",
    images: ["/api/og?title=Spiritual+Direction"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Direction — Vine",
    description: "One of the oldest practices in Christian history — helping a person notice and respond to God. Explore the what, the history, how to find a director, and what a session actually involves.",
    images: ["/api/og?title=Spiritual+Direction"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
