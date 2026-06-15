import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 8: Immanuel and the Stone of Stumbling | Vine",
  description: "A study guide to Isaiah chapter 8 - the sign of Maher-shalal-hash-baz, the gentle waters of Shiloah rejected for the flooding River of Assyria, the LORD as sanctuary and stone of stumbling, and the call to the law and the testimony.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
