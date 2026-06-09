import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamartiology: A Christian Theology of Sin | Vine",
  description:
    "What does Christianity teach about sin? A guide to hamartiology — original sin, total depravity, the categories of sin, sin's effects on creation and self, and the gospel's answer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
