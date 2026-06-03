import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reformed Theology",
  description: "The Reformed tradition — stemming from Calvin, Knox, and the Westminster Assembly — has shaped more evangelical theology than any other tradition. This is the TULIP, the confessions, and the figures.",
  openGraph: {
    title: "Reformed Theology — Vine",
    description: "The Reformed tradition — stemming from Calvin, Knox, and the Westminster Assembly — has shaped more evangelical theology than any other tradition. This is the TULIP, the confessions, and the figures.",
    images: ["/api/og?title=Reformed+Theology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformed Theology — Vine",
    description: "The Reformed tradition — stemming from Calvin, Knox, and the Westminster Assembly — has shaped more evangelical theology than any other tradition. This is the TULIP, the confessions, and the figures.",
    images: ["/api/og?title=Reformed+Theology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
