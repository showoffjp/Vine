import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Missions",
  description: "God is a missionary God. The mission belongs to him — the church is the instrument he has chosen. Every Christian is a participant in the missio Dei, whether across the street or across the world.",
  openGraph: {
    title: "Theology of Missions — Vine",
    description: "God is a missionary God. The mission belongs to him — the church is the instrument he has chosen. Every Christian is a participant in the missio Dei, whether across the street or across the world.",
    images: ["/api/og?title=Theology+of+Missions"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Missions — Vine",
    description: "God is a missionary God. The mission belongs to him — the church is the instrument he has chosen. Every Christian is a participant in the missio Dei, whether across the street or across the world.",
    images: ["/api/og?title=Theology+of+Missions"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
