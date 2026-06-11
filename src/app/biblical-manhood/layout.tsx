import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Biblical Manhood: A Scripture-Rooted Guide | Vine",
  description: "What does it mean to be a man according to Scripture? Explore servant leadership, courage, fatherhood, emotional honesty, and the biblical vision of manhood rooted in creation and the cross.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
