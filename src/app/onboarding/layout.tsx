import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Vine",
  description: "The world's first all-in-one Christian platform",
  openGraph: {
    title: "Welcome to Vine — Vine",
    description: "The world's first all-in-one Christian platform",
    images: ["/api/og?title=Welcome+to+Vine"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Vine — Vine",
    description: "The world's first all-in-one Christian platform",
    images: ["/api/og?title=Welcome+to+Vine"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
