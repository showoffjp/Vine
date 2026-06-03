import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Sexuality",
  description: "Sex is a creation gift, not a necessary evil. The body is not a cage for the soul — it is a temple of the Holy Spirit. A serious, non-prudish, theologically grounded exploration of what Christianit…",
  openGraph: {
    title: "Christian Sexuality — Vine",
    description: "Sex is a creation gift, not a necessary evil. The body is not a cage for the soul — it is a temple of the Holy Spirit. A serious, non-prudish, theologically grounded exploration of what Christianit…",
    images: ["/api/og?title=Christian+Sexuality"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Sexuality — Vine",
    description: "Sex is a creation gift, not a necessary evil. The body is not a cage for the soul — it is a temple of the Holy Spirit. A serious, non-prudish, theologically grounded exploration of what Christianit…",
    images: ["/api/og?title=Christian+Sexuality"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
