import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gift of Singleness: Christian Singleness | The Vine",
  description:
    "Paul called singleness a charisma — a gift from God. Jesus himself was single. Explore the high theology of celibacy, the church's failure to honor single people, and what it means to live this calling with freedom and depth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
