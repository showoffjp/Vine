import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Jonah: A Comprehensive Study Guide | Vine",
  description: "Jonah runs from God's call, is swallowed by a great fish, and preaches repentance to Israel's worst enemies — only to be furious when they actually repent. The book ends with a question: 'Should I not be concerned about Nineveh?' God's mercy is wider than we are comfortable with.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
