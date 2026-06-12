import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Renewed Day by Day: Christian Renewal | The Vine",
  description: "Spiritual renewal for the weary — inner renewal, return to first love, means of grace, and the inward transformation of 2 Corinthians 4:16.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
