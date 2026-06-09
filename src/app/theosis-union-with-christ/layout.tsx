import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theosis & Union with Christ | Vine",
  description:
    "What does it mean to participate in the divine nature? A guide to theosis (deification), union with Christ, and the mystical dimension of the Christian life — Orthodox, Catholic, and Protestant perspectives.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
