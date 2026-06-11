import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suffering & the Christian | Vine",
  description: "A theological and pastoral guide to suffering — Romans 5, James 1, lament psalms, God's purposes in pain, and how the cross transforms the deepest human grief.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
