import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stages of Spiritual Growth",
  description: "Spiritual growth is not accidental — it follows recognizable patterns. Understanding where you are and where you're going is essential for intentional formation. These are the maps the tradition ha…",
  openGraph: {
    title: "Stages of Spiritual Growth — Vine",
    description: "Spiritual growth is not accidental — it follows recognizable patterns. Understanding where you are and where you're going is essential for intentional formation. These are the maps the tradition ha…",
    images: ["/api/og?title=Stages+of+Spiritual+Growth"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stages of Spiritual Growth — Vine",
    description: "Spiritual growth is not accidental — it follows recognizable patterns. Understanding where you are and where you're going is essential for intentional formation. These are the maps the tradition ha…",
    images: ["/api/og?title=Stages+of+Spiritual+Growth"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
