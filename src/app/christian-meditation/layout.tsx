import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Meditation",
  description: "Biblical meditation is ancient, commanded, and transformative — and it is entirely different from Eastern meditation. Learn the tradition, the practices, and the discernment needed to meditate well.",
  openGraph: {
    title: "Christian Meditation — Vine",
    description: "Biblical meditation is ancient, commanded, and transformative — and it is entirely different from Eastern meditation. Learn the tradition, the practices, and the discernment needed to meditate well.",
    images: ["/api/og?title=Christian+Meditation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Meditation — Vine",
    description: "Biblical meditation is ancient, commanded, and transformative — and it is entirely different from Eastern meditation. Learn the tradition, the practices, and the discernment needed to meditate well.",
    images: ["/api/og?title=Christian+Meditation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
