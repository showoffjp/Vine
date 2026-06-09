import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Prayer: A Comprehensive Christian Guide | Vine",
  description:
    "A comprehensive guide to Christian prayer — the Lord's Prayer, types of prayer, praying the Psalms, intercession, unanswered prayer, contemplative prayer, and what the Bible says about how and why we pray.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
