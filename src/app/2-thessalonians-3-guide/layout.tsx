import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 Thessalonians 3 Study Guide &mdash; Work, Idleness, and the Faithfulness of God",
  description: "A verse-by-verse guide to 2 Thessalonians 3: the theology of work as calling, church discipline as restoration, praying for gospel workers, and the command to not grow weary in doing good.",
  openGraph: {
    title: "2 Thessalonians 3 &mdash; The Vine Bible Study",
    description: "A verse-by-verse guide to 2 Thessalonians 3: the theology of work as calling, church discipline as restoration, praying for gospel workers, and the command to not grow weary in doing good.",
    images: ["/api/og?title=2+Thessalonians+3"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Thessalonians 3 &mdash; The Vine Bible Study",
    description: "A verse-by-verse guide to 2 Thessalonians 3: the theology of work as calling, church discipline as restoration, praying for gospel workers, and the command to not grow weary in doing good.",
    images: ["/api/og?title=2+Thessalonians+3"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
