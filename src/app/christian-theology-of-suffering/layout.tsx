import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Suffering",
  description: "Why suffering? — the problem of evil in philosophy and theology, C.S. Lewis and the death of Joy Davidman, lament psalms, the book of Job, Romans 5 and 8, the cross as God's answer to suffering, and what the resurrection means for pain.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
