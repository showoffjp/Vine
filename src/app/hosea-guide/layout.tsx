import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Hosea: A Comprehensive Study Guide | Vine",
  description: "God commands Hosea to marry an unfaithful woman — so that his marriage becomes a living parable of God's relationship with Israel. Hosea's love for Gomer, the meaning of hesed, Israel as spiritual adulteress, and the God who says 'How can I give you up?' (Hosea 11:8).",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
