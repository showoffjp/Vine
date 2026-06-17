import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micah 5 Study Guide &mdash; But You Bethlehem Ephrathah",
  description: "A verse-by-verse guide to Micah 5 &mdash; the messianic prophecy of the ruler from Bethlehem, the remnant who will stand when the Assyrian invades, and the purging of false trust.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
