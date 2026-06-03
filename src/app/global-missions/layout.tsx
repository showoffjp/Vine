import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Missions",
  description: "'A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' This is the vision that drives the mission. Every unreached people group is a…",
  openGraph: {
    title: "Global Missions — Vine",
    description: "'A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' This is the vision that drives the mission. Every unreached people group is a…",
    images: ["/api/og?title=Global+Missions"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Missions — Vine",
    description: "'A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' This is the vision that drives the mission. Every unreached people group is a…",
    images: ["/api/og?title=Global+Missions"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
