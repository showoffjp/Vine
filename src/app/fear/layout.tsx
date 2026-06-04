import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fear & Faith",
  description: "Scripture speaks directly to fear over 365 times. Explore the theology of fear, the fear of God, and how perfect love drives out fear — with practical guidance for every type of fear.",
  openGraph: {
    title: "Fear & Faith — Vine",
    description: "Scripture speaks directly to fear over 365 times. Explore the theology of fear, the fear of God, and how perfect love drives out fear — with practical guidance for every type of fear.",
    images: ["/api/og?title=Fear+%26+Faith"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fear & Faith — Vine",
    description: "Scripture speaks directly to fear over 365 times. Explore the theology of fear, the fear of God, and how perfect love drives out fear — with practical guidance for every type of fear.",
    images: ["/api/og?title=Fear+%26+Faith"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
