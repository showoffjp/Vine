import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator — Vine",
  description: "Discover this creator's faith content, community, and resources on Vine.",
};

export default function CreatorSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
