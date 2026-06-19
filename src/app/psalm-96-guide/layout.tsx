import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 96 Study Guide &mdash; Oh Sing to the LORD a New Song",
  description: "A verse-by-verse guide to Psalm 96 &mdash; the missionary psalm calling all the earth and the nations to declare God's glory, the idols that are nothing, and the LORD who comes to judge the earth in righteousness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
