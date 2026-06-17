import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 17 Study Guide &mdash; Mystery Babylon and the Beast",
  description: "A verse-by-verse guide to Revelation 17 &mdash; the great harlot Babylon, the scarlet beast, and the mystery of the woman who sits on many waters.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
