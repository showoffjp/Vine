import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malachi 2 Study Guide &mdash; The LORD Was Witness to Your Marriage Covenant",
  description: "A verse-by-verse guide to Malachi 2 &mdash; the corrupt priesthood, the covenant of Levi, the treachery of divorce, and the wearying of the LORD with questions like 'Where is the God of justice?'",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
