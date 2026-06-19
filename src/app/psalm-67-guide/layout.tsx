import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 67 Study Guide &mdash; May God Be Gracious to Us and Bless Us",
  description: "A verse-by-verse guide to Psalm 67 &mdash; the missionary psalm built on the Aaronic blessing, praying that God's saving way be known among all nations, and the earth's increase as a sign of his blessing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
