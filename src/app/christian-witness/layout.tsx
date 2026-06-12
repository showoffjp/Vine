import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You Are My Witnesses: Christian Witness | The Vine",
  description: "A guide to bearing witness to Christ — evangelism, the Great Commission, the Holy Spirit's role in witness, and how ordinary Christians carry the gospel into everyday life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
