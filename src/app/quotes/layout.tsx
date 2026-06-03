import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Quotes",
  description: "Wisdom from believers across 2,000 years of faith. Save, share, and let these words shape your day.",
  openGraph: {
    title: "Christian Quotes — Vine",
    description: "Wisdom from believers across 2,000 years of faith. Save, share, and let these words shape your day.",
    images: ["/api/og?title=Christian+Quotes"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Quotes — Vine",
    description: "Wisdom from believers across 2,000 years of faith. Save, share, and let these words shape your day.",
    images: ["/api/og?title=Christian+Quotes"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
