import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theodicy: The Problem of Evil",
  description: "Why does God allow suffering and evil? This is the oldest and hardest challenge to faith. Scripture does not give a philosophical answer — it gives something more powerful: a narrative of God enter…",
  openGraph: {
    title: "Theodicy: The Problem of Evil — Vine",
    description: "Why does God allow suffering and evil? This is the oldest and hardest challenge to faith. Scripture does not give a philosophical answer — it gives something more powerful: a narrative of God enter…",
    images: ["/api/og?title=Theodicy%3A+The+Problem+of+Evil"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theodicy: The Problem of Evil — Vine",
    description: "Why does God allow suffering and evil? This is the oldest and hardest challenge to faith. Scripture does not give a philosophical answer — it gives something more powerful: a narrative of God enter…",
    images: ["/api/og?title=Theodicy%3A+The+Problem+of+Evil"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
