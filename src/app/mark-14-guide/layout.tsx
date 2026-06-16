import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark 14: The Passion Begins - A Study Guide | Vine",
  description: "The anointing at Bethany, the betrayal of Judas, the Last Supper and the new covenant, the agony of Gethsemane, the trial before the Sanhedrin, and Peter's denial. A study guide to Mark chapter 14.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
