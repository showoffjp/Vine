import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apologetics — Vine",
  description: "Defending the faith with reason and grace. Resources for answering the hardest questions about Christianity.",
};

export default function ApologeticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
