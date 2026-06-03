import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith and Works",
  description: "Saved by faith alone, through a faith that is never alone. The most debated question in Western Christianity — examined across theology, Paul, James, and daily life.",
  openGraph: {
    title: "Faith and Works — Vine",
    description: "Saved by faith alone, through a faith that is never alone. The most debated question in Western Christianity — examined across theology, Paul, James, and daily life.",
    images: ["/api/og?title=Faith+and+Works"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith and Works — Vine",
    description: "Saved by faith alone, through a faith that is never alone. The most debated question in Western Christianity — examined across theology, Paul, James, and daily life.",
    images: ["/api/og?title=Faith+and+Works"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
