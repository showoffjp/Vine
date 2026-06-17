import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 33 Study Guide &mdash; Call to Me and I Will Answer You",
  description: "A verse-by-verse guide to Jeremiah 33 &mdash; God's invitation to call on him for great and unsearchable things, the restoration of Jerusalem, and the coming Righteous Branch of David.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
