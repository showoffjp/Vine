import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Music",
  description: "Hand-picked collections for every moment with God",
  openGraph: {
    title: "Christian Music — Vine",
    description: "Hand-picked collections for every moment with God",
    images: ["/api/og?title=Christian+Music"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Music — Vine",
    description: "Hand-picked collections for every moment with God",
    images: ["/api/og?title=Christian+Music"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
