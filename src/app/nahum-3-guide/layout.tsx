import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nahum 3 Study Guide &mdash; Woe to the Bloody City",
  description: "A verse-by-verse guide to Nahum 3 &mdash; the final woe oracle against Nineveh for its bloodshed and sorceries, the comparison to Thebes that fell, and the verdict that there is no healing for Nineveh's hurt.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
