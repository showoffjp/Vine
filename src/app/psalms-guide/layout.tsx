import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide to the Psalms",
  description: "The Psalms are Israel's hymnbook, Christ's prayer book, and the anatomy of the human soul before God. 150 poems voicing the full range of human experience — from ecstatic praise to suicidal darkness.",
  openGraph: {
    title: "Guide to the Psalms — Vine",
    description: "The Psalms are Israel's hymnbook, Christ's prayer book, and the anatomy of the human soul before God. 150 poems voicing the full range of human experience — from ecstatic praise to suicidal darkness.",
    images: ["/api/og?title=Guide+to+the+Psalms"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide to the Psalms — Vine",
    description: "The Psalms are Israel's hymnbook, Christ's prayer book, and the anatomy of the human soul before God. 150 poems voicing the full range of human experience — from ecstatic praise to suicidal darkness.",
    images: ["/api/og?title=Guide+to+the+Psalms"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
