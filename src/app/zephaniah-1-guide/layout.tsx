import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zephaniah 1 Study Guide &mdash; The Great Day of the LORD Is Near",
  description: "A verse-by-verse guide to Zephaniah 1 &mdash; the cosmic sweep of divine judgment, the day of wrath and darkness, and the warning to all who are complacent and say the LORD will not do good or evil.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
