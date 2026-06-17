import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zechariah 14 Study Guide &mdash; The LORD Will Be King over All the Earth",
  description: "A verse-by-verse guide to Zechariah 14 &mdash; the final battle for Jerusalem, the LORD standing on the Mount of Olives, living waters flowing from Jerusalem, and the universal kingship of the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
