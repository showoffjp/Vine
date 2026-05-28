import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard — Vine",
  description: "Top contributors, most faithful pray-ers, and community champions on Vine.",
};

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
