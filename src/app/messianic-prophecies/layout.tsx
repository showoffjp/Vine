import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messianic Prophecies Fulfilled in Christ &mdash; The Vine",
  description: "A deep study of the Old Testament prophecies of the Messiah and their fulfillment in Jesus &mdash; from Genesis 3:15 to Isaiah 53, Psalm 22, Micah 5:2, and Daniel 9 &mdash; with the apologetic case and answers to common objections.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
