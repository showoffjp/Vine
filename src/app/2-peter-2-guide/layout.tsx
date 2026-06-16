import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 Peter 2: False Prophets, Judgment, and the Corruption of the Ungodly | Vine",
  description:
    "A verse-by-verse study of 2 Peter 2 — the marks of false prophets, God's judgment on the ungodly, the way of Balaam, and the tragedy of those who return to corruption after escaping it.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
