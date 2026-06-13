import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Anger",
  description: "Anger and the Christian faith — what the Bible says about anger (Ephesians 4:26, James 1:19-20), the difference between righteous anger and sinful anger, Jesus and the temple, anger as a secondary emotion, the physiology of anger, and how to handle anger without sinning.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
