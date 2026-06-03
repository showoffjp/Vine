import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow Your Faith",
  description: "Curated books, courses, tools, and videos from trusted Christian voices.",
  openGraph: {
    title: "Grow Your Faith — Vine",
    description: "Curated books, courses, tools, and videos from trusted Christian voices.",
    images: ["/api/og?title=Grow+Your+Faith"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Your Faith — Vine",
    description: "Curated books, courses, tools, and videos from trusted Christian voices.",
    images: ["/api/og?title=Grow+Your+Faith"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
