import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servant of All: Christian Leadership | The Vine",
  description:
    "A guide to servant leadership in the Christian tradition — the leader as shepherd, leading from the cross, character before competence, and why leadership in the church looks nothing like leadership in the world.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
