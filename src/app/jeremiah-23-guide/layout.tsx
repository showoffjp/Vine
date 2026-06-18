import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremiah 23 Study Guide &mdash; Woe to the Shepherds Who Destroy My Sheep",
  description: "A verse-by-verse guide to Jeremiah 23 &mdash; God's indictment of false shepherds, the promise of the righteous Branch whose name is the LORD Our Righteousness, and the devastating exposure of lying prophets.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
