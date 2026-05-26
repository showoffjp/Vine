import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event — Vine",
  description: "Join believers from around the world at this Vine community event.",
};

export default function EventIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
