import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Joy Guide",
  description: "The theology of joy — distinguishing joy from happiness, C.S. Lewis's surprised by joy, joy in Philippians, the fruit of the Spirit, the joy set before Jesus (Hebrews 12:2), and why joyfulness is a theological act of resistance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
