import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landmark Sermons",
  description: "12 sermons that shaped Christian history — from Jonathan Edwards igniting revival to Tim Keller reframing grace for a secular city. Each with its context, significance, and where to find it.",
  openGraph: {
    title: "Landmark Sermons — Vine",
    description: "12 sermons that shaped Christian history — from Jonathan Edwards igniting revival to Tim Keller reframing grace for a secular city. Each with its context, significance, and where to find it.",
    images: ["/api/og?title=Landmark+Sermons"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landmark Sermons — Vine",
    description: "12 sermons that shaped Christian history — from Jonathan Edwards igniting revival to Tim Keller reframing grace for a secular city. Each with its context, significance, and where to find it.",
    images: ["/api/og?title=Landmark+Sermons"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
