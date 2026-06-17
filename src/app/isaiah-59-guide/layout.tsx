import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 59 Study Guide &mdash; The LORD's Arm Is Not Too Short to Save",
  description: "A verse-by-verse guide to Isaiah 59 &mdash; the great confession of sin that separates from God, God's own arm that brings salvation, and the Redeemer who comes to Zion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
