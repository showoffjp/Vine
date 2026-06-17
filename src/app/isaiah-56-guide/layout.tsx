import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 56 Study Guide &mdash; My House a House of Prayer for All Nations",
  description: "A verse-by-verse guide to Isaiah 56 &mdash; God's welcome to foreigners and eunuchs, the universal scope of salvation, and the call to maintain justice and righteousness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
