import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Isaiah: A Comprehensive Study Guide | Vine",
  description: "The evangelical prophet — the Holy One of Israel, the Servant Songs, Comfort ye my people, and the New Creation. A comprehensive study guide to the Book of Isaiah.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
