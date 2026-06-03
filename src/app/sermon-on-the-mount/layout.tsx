import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sermon on the Mount",
  description: "Matthew 5–7 is the longest recorded teaching of Jesus and the most concentrated description of what life in his kingdom looks like. It begins with blessing and ends with a choice: rock or sand.",
  openGraph: {
    title: "The Sermon on the Mount — Vine",
    description: "Matthew 5–7 is the longest recorded teaching of Jesus and the most concentrated description of what life in his kingdom looks like. It begins with blessing and ends with a choice: rock or sand.",
    images: ["/api/og?title=The+Sermon+on+the+Mount"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sermon on the Mount — Vine",
    description: "Matthew 5–7 is the longest recorded teaching of Jesus and the most concentrated description of what life in his kingdom looks like. It begins with blessing and ends with a choice: rock or sand.",
    images: ["/api/og?title=The+Sermon+on+the+Mount"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
