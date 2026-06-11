import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Missions: The Missio Dei and the Great Commission | Vine",
  description: "A theological guide to Christian missions — covering the missio Dei, the Great Commission, unreached people groups, integral mission, and practical steps for engaging the unfinished task of world evangelization.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
