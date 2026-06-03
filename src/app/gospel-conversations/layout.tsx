import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gospel Conversations",
  description: "Sharing your faith naturally and honestly — the methods, the common objections, and the practical tips that make evangelism feel like love rather than a sales pitch.",
  openGraph: {
    title: "Gospel Conversations — Vine",
    description: "Sharing your faith naturally and honestly — the methods, the common objections, and the practical tips that make evangelism feel like love rather than a sales pitch.",
    images: ["/api/og?title=Gospel+Conversations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gospel Conversations — Vine",
    description: "Sharing your faith naturally and honestly — the methods, the common objections, and the practical tips that make evangelism feel like love rather than a sales pitch.",
    images: ["/api/og?title=Gospel+Conversations"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
