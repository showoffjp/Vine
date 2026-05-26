import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Vine",
  description: "Thoughtful articles on theology, faith, culture, and the Christian life from voices around the world.",
};

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
