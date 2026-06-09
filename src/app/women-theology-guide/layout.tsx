import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women in Scripture and Theology: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to women in the Bible — the image of God and women, women in the Old Testament, women in Jesus' ministry, women in the early church, the complementarian vs. egalitarian debate, and women in church history.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
