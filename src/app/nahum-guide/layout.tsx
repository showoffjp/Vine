import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Nahum: A Comprehensive Study Guide | Vine",
  description: "Nahum proclaims the fall of Nineveh — the same city Jonah reluctantly saved — now facing God's ultimate judgment. 'The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.' Justice delayed is not justice denied. Nahum answers the question Jonah raised: does God's compassion have limits?",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
