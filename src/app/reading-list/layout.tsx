import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow through great books.",
  description: "Track your spiritual reading, rate books, and build a library of faith-shaping literature.",
  openGraph: {
    title: "Grow through great books. — Vine",
    description: "Track your spiritual reading, rate books, and build a library of faith-shaping literature.",
    images: ["/api/og?title=Grow+through+great+books."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow through great books. — Vine",
    description: "Track your spiritual reading, rate books, and build a library of faith-shaping literature.",
    images: ["/api/og?title=Grow+through+great+books."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
