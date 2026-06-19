import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zephaniah 3 Study Guide &mdash; The LORD Your God Is in Your Midst",
  description: "A verse-by-verse guide to Zephaniah 3 &mdash; the indictment of Jerusalem, the purified remnant who speak no lies, and the great song of joy as the LORD takes away judgment and rejoices over his people with singing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
