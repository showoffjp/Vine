import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 48 Study Guide — Great Is the LORD in Zion",
  description: "Deep study of Psalm 48: Zion the City of God, the great King's dwelling, divine protection, and the Songs of Zion. Commentary by Calvin, Spurgeon, Matthew Henry, and Kidner.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
