import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Planting Guide",
  description: "From call to community — a comprehensive guide to planting a healthy, reproducing church.",
  openGraph: {
    title: "Church Planting Guide — Vine",
    description: "From call to community — a comprehensive guide to planting a healthy, reproducing church.",
    images: ["/api/og?title=Church+Planting+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Planting Guide — Vine",
    description: "From call to community — a comprehensive guide to planting a healthy, reproducing church.",
    images: ["/api/og?title=Church+Planting+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
