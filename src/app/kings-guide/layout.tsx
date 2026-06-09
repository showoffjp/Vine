import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 & 2 Kings: A Comprehensive Study Guide | Vine",
  description: "Solomon's temple and wisdom, the divided kingdom, Elijah's showdown on Mount Carmel, the still small voice, Elisha's miracles, Hezekiah's prayer and miraculous deliverance, and the fall of both kingdoms. What happens when the king's heart turns from God.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
