import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "A Life of Prayer: Deep Prayer Guide | The Vine",
  description: "Building deep communion with God — daily prayer rhythms, Scripture-prayer, ACTS model, unanswered prayer, and the school of prayer.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
