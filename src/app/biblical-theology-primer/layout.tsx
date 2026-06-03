import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Theology Primer",
  description: "The Bible is not a collection of disconnected books — it is one story, moving from creation through fall and redemption to new creation. Learn to read it as a unified whole.",
  openGraph: {
    title: "Biblical Theology Primer — Vine",
    description: "The Bible is not a collection of disconnected books — it is one story, moving from creation through fall and redemption to new creation. Learn to read it as a unified whole.",
    images: ["/api/og?title=Biblical+Theology+Primer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Theology Primer — Vine",
    description: "The Bible is not a collection of disconnected books — it is one story, moving from creation through fall and redemption to new creation. Learn to read it as a unified whole.",
    images: ["/api/og?title=Biblical+Theology+Primer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
