import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark 2 Chapter Guide — Vine",
  description: "A deep study of Mark Chapter 2: the paralytic lowered through the roof, Jesus forgiving sins, the call of Levi, eating with sinners, new wine in new wineskins, and the Lord of the Sabbath.",
};

export default function Mark2GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
