import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iron Sharpens Iron: Christian Friendship | The Vine",
  description:
    "A guide to deep Christian friendship — covenant bonds forged in the Spirit, bearing one another's burdens, the rarity of true friends, and the iron-sharpening-iron accountability that shapes Christlike character.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
