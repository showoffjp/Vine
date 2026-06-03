import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercession",
  description: "Standing in the gap for others — intercession is one of the most powerful and least practiced forms of prayer.",
  openGraph: {
    title: "Intercession — Vine",
    description: "Standing in the gap for others — intercession is one of the most powerful and least practiced forms of prayer.",
    images: ["/api/og?title=Intercession"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intercession — Vine",
    description: "Standing in the gap for others — intercession is one of the most powerful and least practiced forms of prayer.",
    images: ["/api/og?title=Intercession"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
