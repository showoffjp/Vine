import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Ezekiel: A Comprehensive Study Guide | Vine",
  description: "Ezekiel's shocking call vision (the four living creatures and the throne chariot), the valley of dry bones, Israel as God's unfaithful bride, the new temple vision, and what it means that the glory of God will return.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
