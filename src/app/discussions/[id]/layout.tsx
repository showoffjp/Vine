import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discussions — Vine",
  description: "Join the conversation on faith, theology, culture, and life with Christians around the world.",
};

export default function DiscussionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
