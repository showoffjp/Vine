import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 10: The Mighty Angel, the Little Scroll, and the End of Delay | Vine",
  description:
    "A comprehensive study guide to Revelation 10 -- the mighty angel descends with a little scroll, seven thunders are sealed, the oath declares no more delay, and John eats the scroll sweet in the mouth but bitter in the stomach.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
