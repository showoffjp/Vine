import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Evangelism Guide — The Great Commission and the Good News",
  description: "A deep guide to Christian evangelism: the Great Commission (Matt 28:18-20), the meaning of euangelion, kerygma, friendship evangelism, personal testimony, Paul at the Areopagus, and how to share faith without fear.",
  openGraph: {
    title: "Christian Evangelism Guide — The Great Commission and the Good News — Vine",
    description: "A deep guide to Christian evangelism: the Great Commission (Matt 28:18-20), the meaning of euangelion, kerygma, friendship evangelism, personal testimony, Paul at the Areopagus, and how to share faith without fear.",
    images: ["/api/og?title=Christian+Evangelism+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Evangelism Guide — The Great Commission and the Good News — Vine",
    description: "A deep guide to Christian evangelism: the Great Commission (Matt 28:18-20), the meaning of euangelion, kerygma, friendship evangelism, personal testimony, Paul at the Areopagus, and how to share faith without fear.",
    images: ["/api/og?title=Christian+Evangelism+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
