import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lord's Supper",
  description: "Theology, views, practice, and history of Communion",
  openGraph: {
    title: "The Lord's Supper — Vine",
    description: "Theology, views, practice, and history of Communion",
    images: ["/api/og?title=The+Lord's+Supper"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lord's Supper — Vine",
    description: "Theology, views, practice, and history of Communion",
    images: ["/api/og?title=The+Lord's+Supper"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
