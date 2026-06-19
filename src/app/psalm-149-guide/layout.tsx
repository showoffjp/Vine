import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 149 Study Guide &mdash; Sing to the LORD a New Song",
  description: "A verse-by-verse guide to Psalm 149 &mdash; the assembly of the godly singing a new song, the LORD who takes pleasure in his people and adorns the humble with salvation, and the high praises of God in their mouths.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
