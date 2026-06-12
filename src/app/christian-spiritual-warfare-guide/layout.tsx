import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Spiritual Warfare: Armor of God, Prayer, and Victory in Christ | The Vine",
  description:
    "A comprehensive guide to Christian spiritual warfare — Ephesians 6 armor of God, principalities and powers, C.S. Lewis and the Screwtape approach, deliverance vs. demonic oppression, prayer as warfare, and the already-but-not-yet victory of Christ over evil.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
