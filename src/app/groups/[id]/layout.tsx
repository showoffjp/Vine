import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group — Vine",
  description: "Join the conversation in this Vine community group.",
};

export default function GroupIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
