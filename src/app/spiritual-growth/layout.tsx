import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Growth",
  description: "He who began a good work in you will carry it on to completion. Spiritual growth is not self-improvement — it is transformation by One who is at work within you, conforming you to the image of his…",
  openGraph: {
    title: "Spiritual Growth — Vine",
    description: "He who began a good work in you will carry it on to completion. Spiritual growth is not self-improvement — it is transformation by One who is at work within you, conforming you to the image of his…",
    images: ["/api/og?title=Spiritual+Growth"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Growth — Vine",
    description: "He who began a good work in you will carry it on to completion. Spiritual growth is not self-improvement — it is transformation by One who is at work within you, conforming you to the image of his…",
    images: ["/api/og?title=Spiritual+Growth"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
