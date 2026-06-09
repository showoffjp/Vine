import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ruth & Esther: A Comprehensive Study Guide | Vine",
  description: "Two remarkable women, two acts of extraordinary courage. Explore Ruth's loyalty, Boaz as kinsman-redeemer, Esther's 'for such a time as this,' and the hidden providence of God in both books.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
