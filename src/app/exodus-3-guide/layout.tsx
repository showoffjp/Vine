import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Exodus 3 Guide — Moses and the Burning Bush — Christian Study",
  description: "A deep study of Exodus 3 — God appearing to Moses in the burning bush on holy ground, the divine name I AM WHO I AM revealed, the call of Moses to lead Israel out of Egyptian bondage, and God's compassion for a suffering people. Explore vocation, divine revelation, and covenant faithfulness.",
  openGraph: { title: "Exodus 3 Guide — Moses and the Burning Bush — Vine", description: "Explore Exodus 3 — the burning bush, the holy ground, the name of God, and the call of Moses to deliver Israel.", images: ["/api/og?title=Exodus+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Exodus 3 Guide — Moses and the Burning Bush — Vine", description: "A deep study of Exodus 3 — the burning bush, I AM WHO I AM, and God calling Moses to deliver his people.", images: ["/api/og?title=Exodus+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
