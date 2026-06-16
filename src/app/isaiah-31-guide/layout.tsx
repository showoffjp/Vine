import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 31 Bible Study Guide — The Vine",
  description: "A verse-by-verse study of Isaiah 31: the woe oracle against Egypt-trust, God protecting Jerusalem like a lion and hovering birds, the call to return, and Assyria defeated by a sword not of man.",
};

export default function Isaiah31GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
