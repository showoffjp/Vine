import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introverts, Faith & Church | Vine",
  description: "Guidance for introverts navigating an extroverted church culture — biblical grounding, practical wisdom, and freedom to worship as you were made.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
