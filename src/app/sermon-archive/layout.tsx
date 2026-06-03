import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Archive",
  description: "Curated sermons from preachers around the world. Take notes, save favorites, and build your library.",
  openGraph: {
    title: "Sermon Archive — Vine",
    description: "Curated sermons from preachers around the world. Take notes, save favorites, and build your library.",
    images: ["/api/og?title=Sermon+Archive"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermon Archive — Vine",
    description: "Curated sermons from preachers around the world. Take notes, save favorites, and build your library.",
    images: ["/api/og?title=Sermon+Archive"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
