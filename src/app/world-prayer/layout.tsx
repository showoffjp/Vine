import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Prayer",
  description: "Pray for nations. Every country. Every people group. Join thousands interceding for the globe.",
  openGraph: {
    title: "World Prayer — Vine",
    description: "Pray for nations. Every country. Every people group. Join thousands interceding for the globe.",
    images: ["/api/og?title=World+Prayer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Prayer — Vine",
    description: "Pray for nations. Every country. Every people group. Join thousands interceding for the globe.",
    images: ["/api/og?title=World+Prayer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
