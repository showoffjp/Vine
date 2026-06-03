import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian News & Commentary Sources",
  description: "Where serious Christians get their news, theology, and cultural commentary. Not all sources are equal — here’s how each one fits into a healthy information diet.",
  openGraph: {
    title: "Christian News & Commentary Sources — Vine",
    description: "Where serious Christians get their news, theology, and cultural commentary. Not all sources are equal — here’s how each one fits into a healthy information diet.",
    images: ["/api/og?title=Christian+News+%26+Commentary+Sources"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian News & Commentary Sources — Vine",
    description: "Where serious Christians get their news, theology, and cultural commentary. Not all sources are equal — here’s how each one fits into a healthy information diet.",
    images: ["/api/og?title=Christian+News+%26+Commentary+Sources"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
