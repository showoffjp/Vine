import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Political Theology",
  description: "What the Bible says about politics, the major models of Christian civic engagement, how to think about contested issues, and how to engage faithfully without losing the gospel.",
  openGraph: {
    title: "Christian Political Theology — Vine",
    description: "What the Bible says about politics, the major models of Christian civic engagement, how to think about contested issues, and how to engage faithfully without losing the gospel.",
    images: ["/api/og?title=Christian+Political+Theology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Political Theology — Vine",
    description: "What the Bible says about politics, the major models of Christian civic engagement, how to think about contested issues, and how to engage faithfully without losing the gospel.",
    images: ["/api/og?title=Christian+Political+Theology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
