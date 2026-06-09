import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ezra & Nehemiah: A Comprehensive Study Guide | Vine",
  description: "The return from Babylonian exile — Cyrus's decree, Ezra's prayer of confession on behalf of the people, Nehemiah's night survey of Jerusalem's broken walls, rebuilding in 52 days despite opposition, the public reading of the Law, and covenant renewal. What it looks like to rebuild something broken.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
