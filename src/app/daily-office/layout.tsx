import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Daily Office",
  description: "An ancient rhythm of prayer — four times a day, every day — drawn from Scripture, canticles, and the Psalms. Practiced by Christians for two thousand years.",
  openGraph: {
    title: "The Daily Office — Vine",
    description: "An ancient rhythm of prayer — four times a day, every day — drawn from Scripture, canticles, and the Psalms. Practiced by Christians for two thousand years.",
    images: ["/api/og?title=The+Daily+Office"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Office — Vine",
    description: "An ancient rhythm of prayer — four times a day, every day — drawn from Scripture, canticles, and the Psalms. Practiced by Christians for two thousand years.",
    images: ["/api/og?title=The+Daily+Office"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
