import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evangelism Guide — Vine",
  description: "The theology, practice, and courage of sharing the gospel — from the Great Commission to everyday conversations with the people you already know.",
  openGraph: {
    title: "Evangelism Guide — Vine",
    description: "The theology, practice, and courage of sharing the gospel — from the Great Commission to everyday conversations with the people you already know.",
    images: ["/api/og?title=Evangelism+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evangelism Guide — Vine",
    description: "The theology, practice, and courage of sharing the gospel — from the Great Commission to everyday conversations with the people you already know.",
    images: ["/api/og?title=Evangelism+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
