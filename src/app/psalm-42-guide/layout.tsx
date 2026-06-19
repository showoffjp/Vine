import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 42 Study Guide &mdash; As a Deer Pants for Flowing Streams",
  description: "A verse-by-verse guide to Psalm 42 &mdash; the thirst of the soul for the living God, the question 'why are you cast down, O my soul?', the refrain of hope, and remembering God from the land of Jordan.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
