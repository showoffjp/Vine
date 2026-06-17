import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amos 3 Study Guide &mdash; Can Two Walk Together Unless They Agree",
  description: "A verse-by-verse guide to Amos 3 &mdash; God's covenant logic for judgment, the prophet's divine compulsion to speak, and the coming destruction of Israel's altars and palaces.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
