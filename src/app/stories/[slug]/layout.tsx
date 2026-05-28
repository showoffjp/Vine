import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories — Vine",
  description: "Real transformation stories from Christians around the world. Faith, healing, and redemption.",
};

export default function StoriesSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
