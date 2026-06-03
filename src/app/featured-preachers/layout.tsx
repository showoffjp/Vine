import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Preachers & Theologians",
  description: "Eight of the most influential Christian preachers and theologians of the modern era — with their key works, best quotes, and where to find their content.",
  openGraph: {
    title: "Featured Preachers & Theologians — Vine",
    description: "Eight of the most influential Christian preachers and theologians of the modern era — with their key works, best quotes, and where to find their content.",
    images: ["/api/og?title=Featured+Preachers+%26+Theologians"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Preachers & Theologians — Vine",
    description: "Eight of the most influential Christian preachers and theologians of the modern era — with their key works, best quotes, and where to find their content.",
    images: ["/api/og?title=Featured+Preachers+%26+Theologians"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
