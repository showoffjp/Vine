import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Ethics: A Comprehensive Guide | Vine",
  description:
    "How Christians make moral decisions — the foundations of Christian ethics, natural law, Scripture's role, ethical frameworks (virtue ethics, deontology, consequentialism), and how to reason through hard cases.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
