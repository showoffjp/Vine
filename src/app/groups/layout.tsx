import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groups — Vine",
  description: "Join interest circles and small groups with Christians who share your passions. From theology to parenting to creative arts.",
};

export default function GroupsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
