import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 52 Study Guide &mdash; Awake Zion and How Beautiful the Feet of the Gospel",
  description: "A verse-by-verse guide to Isaiah 52 &mdash; God's call for Zion to awake, the herald of good news, and the transition into the fourth Servant Song.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
