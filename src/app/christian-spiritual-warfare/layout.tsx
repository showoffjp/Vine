import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stand Firm: Christian Spiritual Warfare | The Vine",
  description:
    "A theological and practical guide to Christian spiritual warfare — the armor of God, resisting the enemy, Christ's victory over the powers, and staying grounded in Scripture, prayer, and community.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
