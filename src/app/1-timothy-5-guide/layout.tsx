import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Timothy 5 Bible Study Guide — The Vine",
  description: "A verse-by-verse study of 1 Timothy 5: caring for widows, honoring elders with double honor, accountability in leadership, and the church as a genuine family.",
};

export default function FirstTimothy5GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
