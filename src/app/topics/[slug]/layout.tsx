import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topic — Vine",
  description: "Explore this topic across Vine's discussions, stories, and resources.",
};

export default function TopicSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
