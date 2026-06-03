import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lord's Prayer",
  description: "When asked how to pray, Jesus gave a pattern. Six petitions that restructure how we approach God, what we ask for, and who we are when we ask. Every line is a theology lesson.",
  openGraph: {
    title: "The Lord's Prayer — Vine",
    description: "When asked how to pray, Jesus gave a pattern. Six petitions that restructure how we approach God, what we ask for, and who we are when we ask. Every line is a theology lesson.",
    images: ["/api/og?title=The+Lord's+Prayer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lord's Prayer — Vine",
    description: "When asked how to pray, Jesus gave a pattern. Six petitions that restructure how we approach God, what we ask for, and who we are when we ask. Every line is a theology lesson.",
    images: ["/api/og?title=The+Lord's+Prayer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
