import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amos 2 Study Guide &mdash; For Three Transgressions and for Four",
  description: "A verse-by-verse guide to Amos 2 &mdash; the oracles against Moab and Judah, the climactic indictment of Israel for selling the righteous for silver, and God's reminder of all he has done for a people who turned away.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
