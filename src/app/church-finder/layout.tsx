import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find your church home.",
  description: "Discover and save churches worldwide — from historic cathedrals to house churches, in 184 countries.",
  openGraph: {
    title: "Find your church home. — Vine",
    description: "Discover and save churches worldwide — from historic cathedrals to house churches, in 184 countries.",
    images: ["/api/og?title=Find+your+church+home."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find your church home. — Vine",
    description: "Discover and save churches worldwide — from historic cathedrals to house churches, in 184 countries.",
    images: ["/api/og?title=Find+your+church+home."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
