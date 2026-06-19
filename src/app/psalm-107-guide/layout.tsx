import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 107 Study Guide &mdash; Let the Redeemed of the LORD Say So",
  description: "A verse-by-verse guide to Psalm 107 &mdash; the great thanksgiving of the redeemed, four pictures of distress and deliverance (the wanderers, prisoners, the sick, and storm-tossed sailors), and the refrain to give thanks for God's steadfast love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
