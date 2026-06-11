import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Spiritual Gifts Guide | Vine",
  description: "A complete guide to discovering your spiritual gifts — teaching, prophecy, healing, tongues, administration, mercy, giving, and faith. Covers cessationist and continuationist views with Scripture and practical steps.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
