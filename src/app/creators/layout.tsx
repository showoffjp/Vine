import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vine Creators",
  description: "Discover teachers, worship leaders, devotional writers, apologists, and voices of faith from around the world.",
  openGraph: {
    title: "Vine Creators — Vine",
    description: "Discover teachers, worship leaders, devotional writers, apologists, and voices of faith from around the world.",
    images: ["/api/og?title=Vine+Creators"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vine Creators — Vine",
    description: "Discover teachers, worship leaders, devotional writers, apologists, and voices of faith from around the world.",
    images: ["/api/og?title=Vine+Creators"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
