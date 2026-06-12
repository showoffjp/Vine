import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothed with Humility: Christian Humility | The Vine",
  description:
    "Explore humility as the foundation of the Christian life — the kenosis of Christ, freedom from self-preoccupation, and the grace that flows to those who stand low.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
