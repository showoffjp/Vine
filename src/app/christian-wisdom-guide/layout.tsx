import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Wisdom — Skill for Living in the Fear of the LORD | The Vine",
  description:
    "A guide to biblical wisdom — chokmah as skill for living, the fear of the LORD as wisdom's beginning, Lady Wisdom in Proverbs 8, Solomon's request, Christ as the wisdom of God, James 1:5, and the wisdom of the cross.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
