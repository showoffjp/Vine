import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speak, Lord, for Your Servant Is Listening: Christian Listening | The Vine",
  description:
    "A guide to listening prayer — how God speaks, discerning what you hear, contemplative listening, lectio divina, and the silence and solitude that make hearing God possible.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
