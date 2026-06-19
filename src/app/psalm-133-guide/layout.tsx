import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 133 Study Guide &mdash; How Good When Brothers Dwell in Unity",
  description: "A verse-by-verse guide to Psalm 133 &mdash; a Song of Ascents on the blessing of unity among God's people, like the precious oil on Aaron's head and the dew of Hermon, where the LORD commands the blessing of life forevermore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
