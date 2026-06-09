import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Amos: A Comprehensive Study Guide | Vine",
  description: "Amos — a shepherd and fig farmer from Tekoa — delivers God's thunderous call for justice to prosperous, complacent Israel. 'Let justice roll down like waters, and righteousness like an ever-flowing stream' (Amos 5:24). Five visions, oracles against the nations, the plumb line, and the promise of restoration.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
