import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezekiel 33 Study Guide &mdash; Son of Man I Have Made You a Watchman",
  description: "A verse-by-verse guide to Ezekiel 33 &mdash; the watchman's responsibility, God's call to turn from evil and live, the fall of Jerusalem, and the message for those who remain.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
