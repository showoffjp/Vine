import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scripture Memorization: Hiding God's Word in Your Heart | Vine",
  description:
    "A practical and theological guide to Scripture memorization — why it matters, how to do it, how to build a maintenance system, and how memorized Scripture transforms the mind and equips you for ministry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
