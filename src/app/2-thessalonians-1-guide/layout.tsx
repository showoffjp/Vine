import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 Thessalonians 1 Study Guide: Judgment, Glory, and Growing Faith | The Vine",
  description:
    "A comprehensive verse-by-verse study of 2 Thessalonians 1 -- Paul's thanksgiving for faith growing abundantly under persecution, God's righteous judgment at Christ's return, eternal destruction away from the presence of the Lord, and Christ glorified in his saints.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
