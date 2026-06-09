import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sermon on the Mount: A Comprehensive Guide to Matthew 5–7 | Vine",
  description:
    "A comprehensive study of the Sermon on the Mount — the Beatitudes, salt and light, the six antitheses, giving/prayer/fasting, the Lord's Prayer, anxiety and trust, judging others, the narrow gate, and building on the rock.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
