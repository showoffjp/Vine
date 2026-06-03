import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Great Hymns Explained",
  description: "The stories, theology, and line-by-line meaning behind the hymns that have shaped Christian worship for centuries. Understanding why they were written changes everything about singing them.",
  openGraph: {
    title: "Great Hymns Explained — Vine",
    description: "The stories, theology, and line-by-line meaning behind the hymns that have shaped Christian worship for centuries. Understanding why they were written changes everything about singing them.",
    images: ["/api/og?title=Great+Hymns+Explained"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Hymns Explained — Vine",
    description: "The stories, theology, and line-by-line meaning behind the hymns that have shaped Christian worship for centuries. Understanding why they were written changes everything about singing them.",
    images: ["/api/og?title=Great+Hymns+Explained"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
