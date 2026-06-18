import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amos 1 Study Guide &mdash; The LORD Roars from Zion",
  description: "A verse-by-verse guide to Amos 1 &mdash; the prophet's opening roar and the series of oracles against the surrounding nations for their crimes against humanity, setting the stage for Amos's indictment of Israel itself.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
