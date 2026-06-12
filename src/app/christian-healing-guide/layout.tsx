import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lord Who Heals: Christian Healing | The Vine",
  description:
    "A guide to Christian healing — rapha, Jesus' healing ministry as Kingdom sign, James 5 prayer and anointing, unanswered healing prayer, and inner healing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
