import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Fiction & Literature",
  description: "From Dostoevsky to Marilynne Robinson — fiction and poetry that baptizes the imagination, explores grace and sin with honesty, and points toward the one true Story.",
  openGraph: {
    title: "Christian Fiction & Literature — Vine",
    description: "From Dostoevsky to Marilynne Robinson — fiction and poetry that baptizes the imagination, explores grace and sin with honesty, and points toward the one true Story.",
    images: ["/api/og?title=Christian+Fiction+%26+Literature"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Fiction & Literature — Vine",
    description: "From Dostoevsky to Marilynne Robinson — fiction and poetry that baptizes the imagination, explores grace and sin with honesty, and points toward the one true Story.",
    images: ["/api/og?title=Christian+Fiction+%26+Literature"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
