import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow together.",
  description: "Real spiritual growth happens in community. Join a challenge, track your progress, and cheer others on.",
  openGraph: {
    title: "Grow together. — Vine",
    description: "Real spiritual growth happens in community. Join a challenge, track your progress, and cheer others on.",
    images: ["/api/og?title=Grow+together."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow together. — Vine",
    description: "Real spiritual growth happens in community. Join a challenge, track your progress, and cheer others on.",
    images: ["/api/og?title=Grow+together."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
