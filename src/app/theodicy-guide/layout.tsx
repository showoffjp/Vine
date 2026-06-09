import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theodicy: Why Does God Allow Suffering? | Vine",
  description:
    "A comprehensive guide to theodicy — why a good and all-powerful God allows evil and suffering. Covers the logical and evidential problems of evil, major theodicies (free will, soul-making, greater good, skeptical theism), lament in Scripture, and pastoral responses.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
