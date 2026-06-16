import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 11: The Two Witnesses, the Beast, and the Seventh Trumpet | Vine",
  description:
    "A comprehensive study guide to Revelation 11 -- the measuring of the temple, the two witnesses who prophesy for 1,260 days and are killed by the beast then resurrected, and the seventh trumpet declaring Christ's eternal reign.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
