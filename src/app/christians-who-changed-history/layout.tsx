import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christians Who Changed History",
  description: "The men and women whose Christian faith drove them to transform science, end slavery, serve the poor, and reshape culture. Faith that doesn’t change things isn’t the biblical kind.",
  openGraph: {
    title: "Christians Who Changed History — Vine",
    description: "The men and women whose Christian faith drove them to transform science, end slavery, serve the poor, and reshape culture. Faith that doesn’t change things isn’t the biblical kind.",
    images: ["/api/og?title=Christians+Who+Changed+History"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christians Who Changed History — Vine",
    description: "The men and women whose Christian faith drove them to transform science, end slavery, serve the poor, and reshape culture. Faith that doesn’t change things isn’t the biblical kind.",
    images: ["/api/og?title=Christians+Who+Changed+History"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
