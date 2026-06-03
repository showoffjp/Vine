import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Vine",
  description: "Topics, creators, discussions, resources — everything that matters to your faith journey.",
  openGraph: {
    title: "Explore Vine — Vine",
    description: "Topics, creators, discussions, resources — everything that matters to your faith journey.",
    images: ["/api/og?title=Explore+Vine"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Vine — Vine",
    description: "Topics, creators, discussions, resources — everything that matters to your faith journey.",
    images: ["/api/og?title=Explore+Vine"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
