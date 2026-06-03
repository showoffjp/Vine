import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Planting Guide",
  description: "The church reproduces by planting churches. From Paul's missionary journeys to the explosive growth of the Global South, church planting is how the gospel advances. Here is what you need to know.",
  openGraph: {
    title: "Church Planting Guide — Vine",
    description: "The church reproduces by planting churches. From Paul's missionary journeys to the explosive growth of the Global South, church planting is how the gospel advances. Here is what you need to know.",
    images: ["/api/og?title=Church+Planting+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Planting Guide — Vine",
    description: "The church reproduces by planting churches. From Paul's missionary journeys to the explosive growth of the Global South, church planting is how the gospel advances. Here is what you need to know.",
    images: ["/api/og?title=Church+Planting+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
